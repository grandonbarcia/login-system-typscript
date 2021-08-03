import React, { FC } from 'react';

//CSS
import './App.css';

// Bootstrap 
import { Container } from 'react-bootstrap'

// React-Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Components
import Login from './Login/';
import Navi from './NavBar'
import Admin from './Admin'
import SignUp from './SignUp';




const App: FC = () => {

  return (
    <>
      <Router>
        <Navi />
        <Switch>
          <Container className='h-100' fluid>
            <Route path='/' exact>
              <Login />
            </Route>
            <Route path='/Login'>
              <Login />
            </Route>
            <Route path='/SignUp'>
              <SignUp />
            </Route>
            <Route path='/Admin'>
              <Admin />
            </Route>
          </Container>
        </Switch>
      </Router>
    </>
  );
}

export default App;
