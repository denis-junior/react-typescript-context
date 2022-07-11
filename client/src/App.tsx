import React from 'react';
import './App.css';
import { Person } from './components/Person';
import { person } from './components/types';
import { IPerson } from './interface';

function App() {
  const person: person = {
    name:"cleiton rasta",
    age:32
  }

  return (
    <div className="App">
      <Person name={"Denis"} age={20} person={person}/>
    </div>
  );
}

export default App;
