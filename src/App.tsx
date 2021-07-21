import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import List from './Components/List'
import AddToList from './Components/AddToList'
import Login from './Login/Login';



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
    <Container fluid='md'>
      <Row>
        <Col>
          <Login />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
