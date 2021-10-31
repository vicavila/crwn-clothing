import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
class App extends React.Component {
 unsubscribeFromAuth = null;
 constructor() {
  super();
  this.state = {
   currentUser: null,
  };
 }
 componentDidMount() {
  //the stageChange method returns the unsubscribe one
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
   if (userAuth) {
    // this gets the user if it exists or creates returning the query ref
    const userRef = await createUserProfileDocument(userAuth);
    // the onSnapshot method is called the first time
    // and then listens to any changes on the source
    onSnapshot(userRef, (snapshot) => {
     this.setState({
      currentUser: {
       id: userRef.id,
       ...snapshot.data(),
      },
     });
    });
   } else {
    this.setState({ currentUser: userAuth });
   }
  });
 }
 componentWillUnmount() {
  this.unsubscribeFromAuth();
 }
 render() {
  return (
   <div>
    <Header currentUser={this.state.currentUser} />
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
}

export default App;
