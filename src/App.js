import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './Pages/Auth/Login';
import MasterPage from './Pages/Dashboard/Master'; 

function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/dashboard" component={MasterPage} />
          <Route path="*">
            <h1 className="text-center mt-5"><b>404 Page not found</b></h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
