import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './Components/List'
import AddToList from './Components/AddToList'


export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

const App: React.FC = () => {

  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'lebron james',
      url: '',
      age: 36,
      note: 'basketball player'
    },
    {
      name: 'kobe bryant',
      url: '',
      age: 35,
      note: 'basketball player'
    }
  ]);


  people.map((person) => {


  })

  return (
    <div className="App">
      <h1>Hello Everyone</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
