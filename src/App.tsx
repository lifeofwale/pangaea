import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Layout from './container/layout';


function App() {
  return (
    <Switch>
      <Route path="/" component={Layout} />
    </Switch>
  );
}

export default App;
