import React, { useEffect, useState } from 'react';
import { addMonster } from './api';
import { useNavigate } from 'react-router-dom';

function MonsterForm() {
  const navigate = useNavigate();
  const initialState = {
    name: '',
    strength: 0,
    agility: 0,
    wits: '',
    empathy: '',
    skills: '',
    movement: 1,
    armor_bonus: '',
    weapon_bonus: '',
  };

  const [monster, setMonster] = useState(initialState);

  function changeHandler({ target: { name, value } }) {
    setMonster((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function submitHandler(event) {
    event.preventDefault();
    event.stopPropagation();

    await addMonster(monster);
    navigate('/all-monsters');
  }

  return (
    <form onSubmit={submitHandler} id="monster-form">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={monster.name}
        onChange={changeHandler}
        required
      />
      <br />
      <label htmlFor="strength">Strength</label>
      <input
        type="number"
        id="strength"
        name="strength"
        value={monster.strength}
        onChange={changeHandler}
        required
      />
      <br />
      <label htmlFor="agility">Agility</label>
      <input
        type="number"
        id="agility"
        name="agility"
        value={monster.agility}
        onChange={changeHandler}
        required
      />
      <br />
      <label htmlFor="wits">Wits</label>
      <input
        type="number"
        id="wits"
        name="wits"
        value={monster.wits}
        onChange={changeHandler}
      />
      <br />
      <label htmlFor="empathy">Empathy</label>
      <input
        type="number"
        id="empathy"
        name="empathy"
        value={monster.empathy}
        onChange={changeHandler}
      />
      <br />
      <label htmlFor="skills">Skills</label>
      <input
        type="text"
        id="skills"
        name="skills"
        value={monster.skills}
        onChange={changeHandler}
      />
      <br />
      <label htmlFor="movement">Movement</label>
      <input
        type="number"
        id="movement"
        name="movement"
        value={monster.movement}
        onChange={changeHandler}
      />
      <br />
      <label htmlFor="armor_bonus">Armor Bonus</label>
      <input
        type="number"
        id="armor_bonus"
        name="armor_bonus"
        value={monster.armor_bonus}
        onChange={changeHandler}
      />
      <br />
      <label htmlFor="weapon_bonus">Weapon Bonus</label>
      <input
        type="number"
        id="weapon_bonus"
        name="weapon_bonus"
        value={monster.weapon_bonus}
        onChange={changeHandler}
      />
      <br />
      <input type="submit" />
    </form>
  );
}

export default MonsterForm;
