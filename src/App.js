import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Complete from './Complete';
import Home from './Home';
import RegistrationForm from './RegistrationForm';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register/">
            <RegistrationForm />
          </Route>
          <Route path="/registrationComplete/">
            <Complete />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
