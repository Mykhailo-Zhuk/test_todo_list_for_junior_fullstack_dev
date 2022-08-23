import React, { useRef, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { connect } from 'react-redux';
import ContentEditable from 'react-contenteditable';
import styled from 'styled-components';

import { toggleTodo, updateTodo, deleteTodo } from '../asyncActions/todos.js';

const Wrapper = styled.div`
  display: flex;
  padding: 0 5px;
  justify-content: space-between;
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;
const DeleteBtn = styled.button`
  height: 50px;
  font-size: 20px;
  width: 50px;
  background-color: #e74c3c;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    transform: scale(0.95);
  }
`;
function mapDispatch(dispatch) {
  return {
    deleteTodoAction: (todo) => dispatch(deleteTodo(todo)),
    updateTodoAction: (todo) => dispatch(updateTodo(todo)),
    toggleTodoAction: (todo) => dispatch(toggleTodo(todo)),
  };
}

const Task = (props) => {
  const { task, deleteTodoAction, updateTodoAction, toggleTodoAction } = props;
  const [isDisplayed, getDisplayed] = useState(false);
  const [isCompleted, getCompleted] = useState(false);
  const [text, getText] = useState(task.text);
  const textConv = useRef('');
  const isCompletedTodo = (boolean) => {
    getCompleted(boolean);
    toggleTodoAction({ ...task, completed: boolean });
  };
  return (
    <Wrapper
      onMouseLeave={() => {
        getDisplayed(false);
        updateTodoAction({ ...task, text });
      }}>
      <ContentEditable
        html={text}
        onDoubleClick={() => getDisplayed(false)}
        disabled={isDisplayed}
        onChange={(evt) => {
          textConv.current = evt.target.value;
          getText(textConv.current);
        }}
        onClick={() => isCompletedTodo(!isCompleted)}
        onMouseEnter={() => getDisplayed(true)}
        style={{
          display: 'flex',
          justifyContent: 'start',
          textAlign: 'left',
          fontSize: '24px',
          alignItems: 'center',
          padding: '0 10px',
          width: '100%',
          minHeight: '50px',
          backgroundColor: '#f2f2f2',
          borderRadius: '5px',
          textDecoration: `${isCompleted ? 'line-through' : 'none'}`,
        }}
      />
      {isDisplayed && (
        <ButtonWrapper>
          <DeleteBtn onClick={() => deleteTodoAction(task._id)}>
            <FaTrash />
          </DeleteBtn>
        </ButtonWrapper>
      )}
    </Wrapper>
  );
};

export default connect(null, mapDispatch)(Task);
