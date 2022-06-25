import React, { useEffect, useState } from 'react';
import { listMonsters } from './api';

function MonsterList() {
  const testMonsters = [
    {
      name: 'Bloodling',
      strength: 8,
      agility: 4,
      movement: 1,
      armorRating: 6,
      specials: [
        'INCORPOREAL FORM: In the form of the mist, the Bloodlings are immune to all types of physical violence. As soon as they materialize physically, they can be hurt by copper weapons normally. All other forms of weapons do half damage (rounding up).',
        "SENSITIVE TO LIGHT: Bloodlings loathe strong light. A torch or a lantern within ARM'S LENGTH will inflict D3 points of damage to Strength on a Bloodling every round.",
      ],
      attacks: [
        'SLASHING THRUST! The Bloodling uses its arm to slash an adventurer. Roll an attack with twelve Base Dice and Weapon Damage 2 (slash wound).',
        "WHIRLWIND ATTACK! The demon lets its arms sweep around it and hit every adventurer within ARM'S LENGTH. Roll for the attack with eight Base Dice and Weapon Damage 2 (slash wound) against each target.",
        'DOUBLE STAB! The Bloodling suddenly appears between two adventurers and tries to impale them on its arms. Roll an attack against each adventurer with ten Base Dice and Weapon Damage 2 (stab wound).',
        'HORRIBLE MIST! Each adventurer within NEAR range is engulfed by the Blood Mist, which fills their minds with fear. Roll fear attacks with eight Base Dice against all victims.',
        'GOING FOR THE JUGULAR! The Bloodling throws itself upon the adventurer with the lowest Strength within NEAR range and tries to bite its throat. Roll an attack with ten Base Dice and Weapon Damage 2 (slash wound). The attack damages both Strength and Wits. The victim, if hit, is also affected by a demonic infection with a Virulence rating of 9.',
        'LIFE EXTRACTION! The demon embraces an adventurer within NEAR range in a deadly embrace and tries to suck her life out through the mouth and eyes. Roll a fear attack with twelve Base Dice.',
      ],
    },
    {
      name: 'Death Knight',
      strength: 12,
      agility: 3,
      wits: 3,
      empathy: 2,
      skills: 'Scout 2',
      specials: ['TYPICAL GEAR: Longsword, chainmail'],
      attacks: [
        'POWER ATTACK! In deathly silence, the Death Knight swings its weapon in a powerful attack against an adventurer. Perform an attack with twelve Base Dice and damage according to the weapon. If the attack does damage, the adventurer is thrown to NEAR range and is tossed to the ground. The attack can be parried.',
        "UNHOLY ROAR! The Death Knight's decomposed skull contorts and an unnatural scream sounds from the dead throat. Everyone within NEAR range is affected by a fear attack with eight Base Dice.",
        "DEAD MAN'S HAND! The Death Knight lifts his hand and makes a gesture after which an adventurer within NEAR range is lifted from the ground and thrown to SHORT range. Perform an attack with eight Base Dice and Weapon Damage 2 (blunt force).",
        "SWEEPING ATTACK! The beast sweeps with its weapon and attacks all the adventurers within ARM'S LENGTH range with eight Base Dice and damage according to the weapon. The attack can be parried.",
        "CRIPPLING COLD! An unlucky adventurer stares directly into the horrible gaze of the Death Knight as a wheezing sound is heard from the creature's throat. The attack works as paralyzing poison with Potency 8 (see page 113 in the Player's Handbook).",
        'DEATHLY VISIONS! The Death Knight falls to its knees and makes a gesture towards the ground. In the next moment, a temporary gate to the kingdom of death is opened and a chosen adventurer within NEAR range is attacked by a score of screaming phantoms, who tear at the unlucky soul and calls its name in anguish. The victim is affected by a fear attack with twelve Base Dice.',
      ],
    },
  ];

  const [monsters, setMonsters] = useState([]);

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

  if (monsters) {
    return (
      <div>
        {monsters.map((monster, index) => {
          return (
            <div key={index}>
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
