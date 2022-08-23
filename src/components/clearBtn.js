import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { deleteMany } from '../asyncActions/todos.js';

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 30px 5px 0 0;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const BottomText = styled.p`
  font-size: 24px;
  padding-left: 8px;
`;
const Button = styled.button`
  padding: 8px 10px;
  font-size: 24px;
  color: #ffffff;
  border: none;
  background-color: #8e49e8;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    transform: scale(0.95);
  }
`;
function mapToProps(state) {
  const tasksAmount = state.todos.filter((el) => el.completed === 'false');
  const completedTodos = state.todos.filter((el) => el.completed === 'true');
  return {
    tasksAmount,
    completedTodos,
  };
}
function mapDispatch(dispatch) {
  return {
    clearAllTodos: (boolean) => dispatch(deleteMany(boolean)),
  };
}
const ClearBtn = (props) => {
  const { tasksAmount, clearAllTodos, completedTodos } = props;
  return (
    <BottomWrapper>
      <TextWrapper>
        <BottomText>You have {tasksAmount.length} pending tasks</BottomText>
        <BottomText>You have {completedTodos.length} completed tasks</BottomText>
      </TextWrapper>
      <TextWrapper>
        <Button onClick={() => clearAllTodos(true)}>Clear All</Button>
      </TextWrapper>
    </BottomWrapper>
  );
};

export default connect(mapToProps, mapDispatch)(ClearBtn);
