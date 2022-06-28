import React, { useEffect, useState } from 'react';
import { addEncounter } from './api';
import { listMonsters } from './api';

function EncounterForm() {
  const [encounter, setEncounter] = useState({});
  const [encounterName, setEncounterName] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [selectedMonster, setSelectedMonster] = useState(0);

  function monsterChangeHandler({ target: { value } }) {
    console.log(value);
    setSelectedMonster(value);
  }

  function nameChangeHandler({ target: { value } }) {
    setEncounterName(value);
  }

  async function saveEncounter(event) {
    event.preventDefault();
    event.stopPropagation();
    const APIEncounter = { name: encounterName, monsterQuantities: encounter };
    await addEncounter(APIEncounter);
  }

  function increaseQuantity(id) {
    const editedEncounter = { ...encounter };
    editedEncounter[id] += 1;
    setEncounter(editedEncounter);
  }

  function decreaseQuantity(id) {
    const editedEncounter = { ...encounter };
    editedEncounter[id] -= 1;
    if (editedEncounter[id] === 0) {
      delete editedEncounter[id];
    }
    setEncounter(editedEncounter);
  }

  useEffect(() => {
    const abortController = new AbortController();
    setMonsters([]);
    async function loadMonsters() {
      try {
        const monstersFromAPI = await listMonsters(abortController.signal);
        setMonsters(monstersFromAPI);
        console.log(monstersFromAPI);
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

  function addEncounterMonster(event) {
    event.preventDefault();
    event.stopPropagation();
    if (selectedMonster in encounter) {
      increaseQuantity(selectedMonster);
    } else {
      setEncounter({ ...encounter, [selectedMonster]: 1 });
    }
    console.log(encounter);
  }

  function displayEncounter() {
    const finalDisplay = [];
    for (let id in encounter) {
      finalDisplay.push(
        <div>
          <p>
            {
              monsters.find((m) => {
                console.log(m);
                console.log(id);
                return m.id == id;
              }).name
            }
          </p>
          <button
            onClick={() => {
              decreaseQuantity(id);
            }}
          >
            -
          </button>
          <span>{encounter[id]}</span>
          <button
            onClick={() => {
              increaseQuantity(id);
            }}
          >
            +
          </button>
        </div>
      );
    }
    return finalDisplay;
  }

  return (
    <div>
      <form onSubmit={saveEncounter}>
        <input
          type="text"
          id="name"
          name="name"
          value={encounter.name}
          onChange={nameChangeHandler}
          required
        />
        <h4>
          <input type="submit" value="Save Encounter" />
        </h4>
      </form>
      <form onSubmit={addEncounterMonster} id="add-monster">
        <select name="monster_select" onChange={monsterChangeHandler} required>
          <option value=""> Please choose an option </option>
          {monsters ? (
            monsters.map((monster, index) => {
              return (
                <option key={index} value={monster.id}>
                  {monster.name}
                </option>
              );
            })
          ) : (
            <> </>
          )}
        </select>
        <input type="submit" />
      </form>
      <div>{displayEncounter()}</div>
    </div>
  );
}

export default EncounterForm;
