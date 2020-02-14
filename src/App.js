import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import RegistrationForm from './RegistrationForm';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register/">
            <RegistrationForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
