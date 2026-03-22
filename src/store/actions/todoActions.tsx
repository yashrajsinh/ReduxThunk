export const todoActions = data => {
  return dispatch => {
    dispatch({
      type: 'ADD_TODO',
      payload: data,
    });
  };
};
