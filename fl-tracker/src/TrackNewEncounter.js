import React, { useEffect, useState } from 'react';
import {
  addActiveEncounter,
  getMonster,
  addActiveMonster,
  addActiveMonstersToActiveEncounter,
} from './api';
import { listEncounters } from './api';

function TrackNewEncounter() {
  const [encounters, setEncounters] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    setEncounters([]);

    async function loadEncounters() {
      try {
        const encountersFromAPI = await listEncounters(abortController.signal);
        setEncounters(encountersFromAPI);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Aborted');
        } else {
          throw error;
        }
      }
    }

    loadEncounters();
    return () => abortController.abort();
  }, []);

  async function submitNewEncounter(encounter) {
    const encounterMonsters = [];
    for (let monsterId in encounter.monsterQuantities) {
      const monster = await getMonster(monsterId);
      delete monster.id;
      for (
        let index = 0;
        index < encounter.monsterQuantities[monsterId];
        index++
      ) {
        const activeMonsterFromAPI = await addActiveMonster(monster);
        encounterMonsters.push(activeMonsterFromAPI);
      }
    }
    const activeEncounterFromAPI = await addActiveEncounter({
      type: encounter.name,
    });

    addActiveMonstersToActiveEncounter(
      activeEncounterFromAPI,
      encounterMonsters
    );
  }

  return (
    <div>
      {encounters ? (
        encounters.map((encounter, index) => {
          return (
            <button key={index} onClick={() => submitNewEncounter(encounter)}>
              {encounter.name}
            </button>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default TrackNewEncounter;
