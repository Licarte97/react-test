import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Bootstrap

const App = () => {
  return <Router>
    <Switch>
      <Route path = "/" exact>
        <Home/>
      </Route>
      <Route path = "/:cName/details" exact component={CountryDetails}>
        
      </Route>
      <Redirect to="/" />
    </Switch>
  </Router>
};
export default App;
