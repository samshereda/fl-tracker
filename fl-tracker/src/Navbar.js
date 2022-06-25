import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/all-monsters">All Monsters</Link>
      <br />
      <Link to="/monster-form">Create a Monster</Link>
      <br />
      <Link to="/encounter-form">Create an Encounter</Link>
    </nav>
  );
}

export default Navbar;
