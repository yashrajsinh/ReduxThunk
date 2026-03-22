import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

//reducer
const initialState = [];
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    default:
      return state;
  }
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
