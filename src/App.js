import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
function App() {
 return (
  <div>
   <Header />
   {/* makes it so that it stops with the first coincidence so that exact will not be necessary */}
   <Switch>
    {/* exact: so that it doesn't catch all under it like /hats, alone is equivalent to exact="true", for example if set to false or not included it will render homepage as well as the next (HatsPage) one after the other  */}
    {/* one caveat with route is that we only can access history, match, etc, from the first component that gets passed into our route, in this case HomePage, we could pass those as props down to the components needed through props but we'll end up with prop drilling where some intermediate components which don't need the history will have to include it just to pass it down, to solve it we can implement withRouter only on the component in which it's needed */}
    <Route exact path="/" component={HomePage} />
    <Route path="/shop" component={ShopPage} />
    <Route path="/signin" component={SignInAndSignUpPage} />
   </Switch>
  </div>
 );
}

export default App;
