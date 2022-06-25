import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <header>
      <div>
        <p>
          Hi, welcome to my encounter tools for Free League's fantasy
          roleplaying game, <em>Forbidden Lands</em>! These tools can be used to
          track encounters from the <em>Forbidden Lands Gamemaster's Guide</em>,
          but they can also be used for any Year Zero Engine games that track
          individual attribute scores, like <em>Mutant: Year Zero</em>
        </p>
        {/* <p>
          To start tracking an encounter, click <Link>here!</Link>
        </p>
        <p>
          To save encounters and make custom enemies, click <Link>here!</Link>
        </p> */}
      </div>
    </header>
  );
}

export default Home;
