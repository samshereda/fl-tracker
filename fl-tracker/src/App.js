import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Navbar from './Navbar';
import MonsterList from './MonsterList';
import MonsterForm from './MonsterForm';
import EncounterForm from './EncounterForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/all-monsters" element={<MonsterList />} />
        <Route path="/monster-form" element={<MonsterForm />} />
        <Route path="/encounter-form" element={<EncounterForm />} />
      </Routes>
    </div>
  );
}

export default App;
