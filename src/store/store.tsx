import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

const initialState = [];

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //Adding to store
    case 'ADD_TODO':
      return [...state, action.payload];

    //check specific task
    case 'TOGGLE_TASK':
      return state.map(task =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task,
      );

    default:
      return state;
  }
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
