import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';
import './App.css';

const App = () => {
  return <Router>
    <Switch>
      <Route path = "/" exact>
        <Home/>
      </Route>
      <Route path = "/:cName/details" exact>
        <CountryDetails/>
      </Route>
      <Redirect to="/" />
    </Switch>
  </Router>
};
export default App;
