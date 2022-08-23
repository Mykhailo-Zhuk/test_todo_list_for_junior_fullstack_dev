const initialState = {
  todos: [],
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODOS': {
      return { todos: [...action.payload] };
    }
    case 'ADD_TODO': {
      return { todos: [...state.todos, action.payload] };
    }
    case 'CHANGE_TEXT': {
      let todo = state.todos.find((el) => el._id === action.todo._id);
      if (todo) {
        todo.text = action.todo.text;
      }
      return { ...state };
    }
    case 'TOGGLE_TODO': {
      let todo = state.todos.find((task) => task._id === action.todo._id);
      if (todo) {
        todo.completed = action.todo.completed;
      }
      return { ...state };
    }
    case 'DELETE_TODO': {
      const filterTasks = state.todos.filter((el) => el._id !== action.todo._id);
      return { todos: filterTasks };
    }
    case 'CLEAR_ALL': {
      return { todos: [] };
    }
    default:
      return state;
  }
};
