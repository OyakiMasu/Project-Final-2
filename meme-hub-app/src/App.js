import './App.css';
import Home from './components/Home';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Login from './components/Login';
import Memepg from './components/Memepg';


function App() {
  return (
    <div className="App">
    <Switch>
      <Route path="/memepg">
        <Memepg />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch> 
      </div>
  );
}

export default App;
