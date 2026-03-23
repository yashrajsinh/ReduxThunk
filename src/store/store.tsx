import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

const initialState = {
  activeTasks: [],
  completedTasks: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // ADD TASK
    case 'ADD_TODO':
      return {
        ...state,
        activeTasks: [...state.activeTasks, action.payload],
      };

    // TOGGLE (MOVE BOTH WAYS)
    case 'TOGGLE_TASK': {
      // check active → move to completed
      const activeTask = state.activeTasks.find(
        task => task.id === action.payload,
      );

      if (activeTask) {
        return {
          ...state,
          activeTasks: state.activeTasks.filter(
            task => task.id !== action.payload,
          ),
          completedTasks: [
            ...state.completedTasks,
            { ...activeTask, completed: true },
          ],
        };
      }

      return state;
    }

    default:
      return state;
  }
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
