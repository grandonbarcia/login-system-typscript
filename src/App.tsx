import React, { FC, useState } from 'react';
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

const App: FC = () => {

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

  const Center: FC = ({ children }) => {

    return (
      <Row className='justify-content-center h-100'>
        <Col className='align-self-center' xl={'4'}>
          {children}
        </Col>
      </Row>
    )
  }




  return (
    <Container className='h-100' fluid>
      <Center>
        <Login />
      </Center>
    </Container>
  );
}

export default App;
