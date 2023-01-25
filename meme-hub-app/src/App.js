// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import React from 'react';
import Navbar from './components/Navbar';
import { Route, Switch } from "react-router-dom";
import Login from './components/Login';
import Memepg from './components/Memepg';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route path='/memepg'>
        <Memepg />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
    <Home/>
      </div>
  );
}

export default App;
