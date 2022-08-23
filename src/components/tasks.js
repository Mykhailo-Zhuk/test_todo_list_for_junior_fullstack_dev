import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../asyncActions/todos';
import ClearBtn from './clearBtn';
import Task from './task';

function mapToProps(state) {
  const { todos } = state;
  return {
    todos,
  };
}
function mapDispatch(dispatch) {
  return {
    addTodosAction: () => dispatch(fetchTodos()),
  };
}
const Tasks = (props) => {
  const { addTodosAction } = props;
  useEffect(() => {
    console.log('Fetching data from db complete!');
    addTodosAction();
  }, []);
  const { todos } = props;

  return (
    <React.Fragment>
      {todos.map((task) => {
        return <Task key={task._id} task={task} />;
      })}
      <ClearBtn />
    </React.Fragment>
  );
};

export default connect(mapToProps, mapDispatch)(Tasks);
