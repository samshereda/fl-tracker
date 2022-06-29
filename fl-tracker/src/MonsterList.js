import React, { useEffect, useState } from 'react';
import { listMonsters } from './api';

function MonsterList() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    setMonsters([]);
    async function loadMonsters() {
      try {
        const monstersFromAPI = await listMonsters(abortController.signal);
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

  if (monsters) {
    return (
      <div className="bestiary">
        {monsters.map((monster, index) => {
          return (
            <div key={index} className="monster-card">
              <h4>{monster.name}</h4>
              <p>Strength: {monster.strength}</p>
              <p>Agility: {monster.agility}</p>
              {monster.empathy ? <p>Empathy: {monster.empathy}</p> : <></>}
              {monster.wits ? <p>Wits: {monster.wits}</p> : <></>}
              {monster.skills ? <p>Skills: {monster.skills}</p> : <></>}
              {monster.movement ? <p>Movement: {monster.movement}</p> : <></>}
              {monster.armor_bonus ? (
                <p>Armor Bonus: {monster.armor_bonus}</p>
              ) : (
                <></>
              )}
              {monster.weapon_bonus ? (
                <p>Weapon Bonus: {monster.weapon_bonus}</p>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    );
  } else {
    return <p>no monsters</p>;
  }
}

export default MonsterList;
