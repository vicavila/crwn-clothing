const INITIAL_STATE = {
 currentUser: null,
};

// every single reducer gets every single action that ever gets fired
// even if those actions are not related to this reducer
const userReducer = (state = INITIAL_STATE, action) => {
 switch (action.type) {
  case 'SET_CURRENT_USER':
   return {
    ...state,
    currentUser: action.payload,
   };
  default:
   return state;
 }
};

export default userReducer;
