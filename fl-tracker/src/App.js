import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Navbar from './Navbar';
import MonsterList from './MonsterList';
import MonsterForm from './MonsterForm';
import EncounterForm from './EncounterForm';
import TrackNewEncounter from './TrackNewEncounter';
import SelectEncounter from './SelectEncounter';
import EncounterTracker from './EncounterTracker';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/allMonsters" element={<MonsterList />} />
        <Route path="/monsterForm" element={<MonsterForm />} />
        <Route path="/encounterForm" element={<EncounterForm />} />
        <Route path="/newEncounter" element={<TrackNewEncounter />} />
        <Route path="/selectEncounter" element={<SelectEncounter />} />
        <Route
          path="/encounterTracker/:activeEncounterId"
          element={<EncounterTracker />}
        />
      </Routes>
    </div>
  );
}

export default App;
