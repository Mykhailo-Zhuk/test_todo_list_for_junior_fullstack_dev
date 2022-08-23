export const addTodosAction = (payload) => {
  return { type: 'ADD_TODOS', payload };
};

export const createTodoAction = (payload) => {
  return {
    type: 'ADD_TODO',
    payload,
  };
};

export const toggleTodoAction = (todo) => {
  return {
    type: 'TOGGLE_TODO',
    todo,
  };
};

export const deleteTodoAction = (todo) => {
  return {
    type: 'DELETE_TODO',
    todo,
  };
};

export const updateTodoAction = (todo) => {
  return {
    type: 'CHANGE_TEXT',
    todo,
  };
};

export const clearAllTodos = () => {
  return {
    type: 'CLEAR_ALL',
  };
};
