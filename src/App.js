import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
class App extends React.Component {
 unsubscribeFromAuth = null;
 componentDidMount() {
  const { setCurrentUser } = this.props;
  //the stageChange method returns the unsubscribe one
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
   if (userAuth) {
    // this gets the user if it exists or creates returning the query ref
    const userRef = await createUserProfileDocument(userAuth);
    // the onSnapshot method is called the first time
    // and then listens to any changes on the source
    onSnapshot(userRef, (snapshot) => {
     setCurrentUser({
      id: userRef.id,
      ...snapshot.data(),
     });
    });
   } else {
    setCurrentUser(userAuth);
   }
  });
 }
 componentWillUnmount() {
  this.unsubscribeFromAuth();
 }
 render() {
  return (
   <div>
    <Header />
    {/* makes it so that it stops with the first coincidence so that exact will not be necessary */}
    <Switch>
     {/* exact: so that it doesn't catch all under it like /hats, alone is equivalent to exact="true", for example if set to false or not included it will render homepage as well as the next (HatsPage) one after the other  */}
     {/* one caveat with route is that we only can access history, match, etc, from the first component that gets passed into our route, in this case HomePage, we could pass those as props down to the components needed through props but we'll end up with prop drilling where some intermediate components which don't need the history will have to include it just to pass it down, to solve it we can implement withRouter only on the component in which it's needed */}
     <Route exact path="/" component={HomePage} />
     <Route path="/shop" component={ShopPage} />
     <Route
      exact
      path="/signin"
      render={() =>
       this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
      }
     />
    </Switch>
   </div>
  );
 }
}

const mapStateToProps = ({ user }) => ({
 currentUser: user.currentUser,
});

// this should return an object with the props that dispatches the action
// we want to pass, on this case setCurrentUser imported above
const mapDispatchToProps = (dispatch) => ({
 setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// here the first prop is mapStateToProps, but as
// the app doesn't need any prop from the store it's null
export default connect(mapStateToProps, mapDispatchToProps)(App);
