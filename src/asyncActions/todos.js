import axios from 'axios';
import {
  addTodosAction,
  clearAllTodos,
  createTodoAction,
  deleteTodoAction,
  toggleTodoAction,
  updateTodoAction,
} from '../actions/actions';

export const fetchTodos = () => {
  return (dispatch) => {
    axios
      .get('http://localhost:5000/api/todos/')
      .then(function (response) {
        // handle success
        dispatch(addTodosAction(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
};

export const addTodo = (text) => {
  return (dispatch) => {
    axios
      .post('http://localhost:5000/api/todos/', { text, completed: false })
      .then(function (response) {
        // handle success
        dispatch(createTodoAction(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
};
export const updateTodo = (todo) => {
  return (dispatch) => {
    axios
      .put('http://localhost:5000/api/todos/', todo)
      .then(function (response) {
        // handle success
        dispatch(updateTodoAction(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
};

export const toggleTodo = (todo) => {
  return (dispatch) => {
    axios
      .put('http://localhost:5000/api/todos/', todo)
      .then(function (response) {
        // handle success
        dispatch(toggleTodoAction(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
};

export const deleteTodo = (todo) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:5000/api/todos/${todo}`)
      .then(function (response) {
        // handle success
        dispatch(deleteTodoAction(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
};
export const deleteMany = (boolean) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/`, boolean)
      .then(function (response) {
        console.log('Dropping complete!');
        // handle success
        dispatch(clearAllTodos());
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
};
