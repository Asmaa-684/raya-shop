const INITIAL_STATE = {
    favoriteCart:[],
  
  };
  
  export default function  favoritesReducer(state = INITIAL_STATE, action) {
    console.log(action)
    switch (action.type) {
      case "SET_FAVORITES":
        return {
          ...state,
          favoriteCart: action.payload,
        };
      default:
        return state;
    }
  }