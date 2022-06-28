import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/allMonsters" className="nav-link">
        All Monsters
      </Link>

      <Link to="/monsterForm" className="nav-link">
        Create a Monster
      </Link>

      <Link to="/encounterForm" className="nav-link">
        Create an Encounter
      </Link>

      <Link to="/newEncounter" className="nav-link">
        Track a New Encounter
      </Link>

      <Link to="/selectEncounter" className="nav-link">
        Track an Existing Encounter
      </Link>
    </nav>
  );
}

export default Navbar;
