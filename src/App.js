import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => (
 <div>
  <h1>HATS PAGE</h1>
 </div>
);

function App() {
 return (
  <div>
   {/* makes it so that it stops with the first coincidence so that exact will not be necessary */}
   <Switch>
    {/* exact: so that it doesn't catch all under it like /hats, alone is equivalent to exact="true", for example if set to false or not included it will render homepage as well as the next (HatsPage) one after the other  */}
    <Route exact path="/" component={HomePage} />
    <Route path="/hats" component={HatsPage} />
   </Switch>
  </div>
 );
}

export default App;
