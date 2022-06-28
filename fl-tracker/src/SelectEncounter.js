import React, { useEffect, useState } from 'react';
import {
  addActiveEncounter,
  getMonster,
  addActiveMonster,
  addActiveMonstersToActiveEncounter,
  listActiveEncounters,
} from './api';
import { getActiveEncounter } from './api';

import { Link } from 'react-router-dom';

function SelectEncounter() {
  const [encounters, setEncounters] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    setEncounters([]);

    async function loadEncounters() {
      try {
        const encountersFromAPI = await listActiveEncounters(
          abortController.signal
        );
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

  return (
    <div>
      {encounters ? (
        encounters.map((encounter, index) => {
          return (
            <Link key={index} to={`/encounterTracker/${encounter.id}`}>
              <p>{`Encounter ${encounter.id}`}</p>
              <p>{`Type: ${encounter.type}`}</p>
            </Link>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default SelectEncounter;
