import React, { useEffect, useState } from 'react';
import {
  editActiveMonster,
  listActiveEncounterActiveMonsters,
  deleteActiveMonster,
} from './api';
import { useParams } from 'react-router-dom';

function EncounterTracker() {
  const [monsters, setMonsters] = useState();
  const activeEncounterId = useParams().activeEncounterId;

  useEffect(() => {
    const abortController = new AbortController();
    setMonsters([]);
    async function loadMonsters() {
      try {
        const monstersFromAPI = await listActiveEncounterActiveMonsters(
          activeEncounterId,
          abortController.signal
        );

        setMonsters(monstersFromAPI);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Aborted');
        } else {
          throw error;
        }
      }
    }

    loadMonsters();
    return () => abortController.abort();
  }, []);

  function decreaseAttribute(attribute, monsterIndex) {
    const updatedMonsterList = [...monsters];
    const updatedMonster = updatedMonsterList[monsterIndex];
    if (updatedMonster[attribute] > 0) {
      updatedMonster[attribute] -= 1;
    }
    setMonsters(updatedMonsterList);
    editActiveMonster(updatedMonster);
  }

  function increaseAttribute(attribute, monsterIndex) {
    const updatedMonsterList = [...monsters];
    const updatedMonster = updatedMonsterList[monsterIndex];
    updatedMonster[attribute] += 1;
    setMonsters(updatedMonsterList);
  }

  async function deleteMonsterFromEncounter(monster) {
    await deleteActiveMonster(monster);
    const monstersFromAPI = await listActiveEncounterActiveMonsters(
      activeEncounterId
    );
    setMonsters(monstersFromAPI);
  }

  return (
    <div className="bestiary">
      {monsters ? (
        monsters.map((monster, index) => {
          return (
            <div key={index} className="monster-card">
              <button
                onClick={() => deleteMonsterFromEncounter(monster)}
                className="close-button"
              >
                X
              </button>
              <h4>{monster.name}</h4>
              <p>
                <button
                  onClick={() => {
                    decreaseAttribute('strength', index);
                  }}
                >
                  -
                </button>
                Strength: {monster.strength}
                <button
                  onClick={() => {
                    increaseAttribute('strength', index);
                  }}
                >
                  +
                </button>
              </p>
              <p>
                <button
                  onClick={() => {
                    decreaseAttribute('agility', index);
                  }}
                >
                  -
                </button>
                Agility: {monster.agility}
                <button
                  onClick={() => {
                    increaseAttribute('agility', index);
                  }}
                >
                  +
                </button>
              </p>
              {monster.empathy !== null ? (
                <p>
                  <button
                    onClick={() => {
                      decreaseAttribute('empathy', index);
                    }}
                  >
                    -
                  </button>
                  Empathy: {monster.empathy}
                  <button
                    onClick={() => {
                      increaseAttribute('empathy', index);
                    }}
                  >
                    +
                  </button>
                </p>
              ) : (
                <></>
              )}
              {monster.wits !== null ? (
                <p>
                  <button
                    onClick={() => {
                      decreaseAttribute('wits', index);
                    }}
                  >
                    -
                  </button>
                  Wits: {monster.wits}
                  <button
                    onClick={() => {
                      increaseAttribute('wits', index);
                    }}
                  >
                    +
                  </button>
                </p>
              ) : (
                <></>
              )}
              {monster.skills ? <p>Skills: {monster.skills}</p> : <></>}
              {monster.movement ? <p>Movement: {monster.movement}</p> : <></>}
              {monster.armor_bonus !== null ? (
                <p>
                  <button
                    onClick={() => {
                      decreaseAttribute('armor_bonus', index);
                    }}
                  >
                    -
                  </button>
                  Armor Bonus: {monster.armor_bonus}
                  <button
                    onClick={() => {
                      increaseAttribute('armor_bonus', index);
                    }}
                  >
                    +
                  </button>
                </p>
              ) : (
                <></>
              )}
              {monster.weapon_bonus !== null ? (
                <p>
                  <button
                    onClick={() => {
                      decreaseAttribute('weapon_bonus', index);
                    }}
                  >
                    -
                  </button>
                  Weapon Bonus: {monster.weapon_bonus}
                  <button
                    onClick={() => {
                      increaseAttribute('weapon_bonus', index);
                    }}
                  >
                    +
                  </button>
                </p>
              ) : (
                <></>
              )}
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default EncounterTracker;
