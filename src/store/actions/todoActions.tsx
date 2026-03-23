export const addTodo = data => {
  return dispatch => {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        ...data,
        id: Date.now().toString(), //  unique id
        completed: false, // important to set default false
      },
    });
  };
};

export const toggleTask = id => {
  return dispatch => {
    dispatch({
      type: 'TOGGLE_TASK',
      payload: id,
    });
  };
};
