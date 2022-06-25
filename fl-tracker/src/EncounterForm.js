import React, { useEffect, useState } from 'react';
import { addEncounter } from './api';
import { listMonsters } from './api';

function EncounterForm() {
  const [encounter, setEncounter] = useState([]);

  function changeHandler({ target: { name, value } }) {
    console.log(name, value);
    setSelectedMonster({
      name: value,
    });
    console.log(selectedMonster);
  }

  async function submitHandler(event) {
    event.preventDefault();
    event.stopPropagation();

    await addEncounter(encounter);
  }

  const [monsters, setMonsters] = useState([]);

  function increaseQuantity(id) {
    const editedEncounter = encounter.slice();
    editedEncounter.find((monster) => {
      return monster.id == id;
    }).quantity += 1;
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
    if (
      encounter.some((monster) => {
        return monster.id == selectedMonster.name;
      })
    ) {
      increaseQuantity(selectedMonster.name);
    } else {
      setEncounter([...encounter, { id: selectedMonster.name, quantity: 1 }]);
    }
  }

  const [selectedMonster, setSelectedMonster] = useState({
    monster_select: '',
  });

  return (
    <div>
      <form onSubmit={addEncounterMonster} id="add-monster">
        <select name="monster_select" onChange={changeHandler} required>
          <option value=""> Please choose an option </option>
          {monsters ? (
            monsters.map((monster, index) => {
              return (
                <option key={index} value={index}>
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
      {encounter.map((monster) => {
        return (
          <div key={monster.id}>
            <p>{monsters[monster.id].name}</p>
            <button>-</button>
            <span>{monster.quantity}</span>
            <button> +</button>
          </div>
        );
      })}
    </div>
  );
}

export default EncounterForm;
