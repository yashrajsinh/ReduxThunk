export const addTodo = data => {
  return dispatch => {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        ...data,
        id: Date.now().toString(), //  unique id
        completed: false, // important
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
