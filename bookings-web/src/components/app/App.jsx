import React from 'react';
import Getaways from '../../containers/Getaways';
import DetailsContainer from '../../containers/DetailsContainer';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Getaways} />
          <Route exact path="/places/:id" component={DetailsContainer} />
        </Switch>
      </Router>
    </div>
  )
}
