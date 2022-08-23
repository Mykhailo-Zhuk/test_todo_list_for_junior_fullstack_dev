import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

import { addTodo } from '../asyncActions/todos.js';

const Wrapper = styled.form`
  display: flex;
  gap: 7px;
  text-align: justify;
  margin: 0 5px;
`;
const UserInput = styled.input`
  font-size: 24px;
  width: 340px;
  height: 48px;
  border: 2px solid #d8d8d8;
  padding: 0px 10px;
  border-radius: 5px;
  &:hover {
    transform: scale(0.99);
  }
`;
const Button = styled.button`
  width: 50px;
  font-size: 20px;
  height: 50px;
  text-justify: center;
  text-align: center;
  background-color: #8e49e8;
  cursor: pointer;
  border: none;
  color: #ffffff;
  border-radius: 5px;
  &:hover {
    transform: scale(0.95);
  }
`;

function mapDispatch(dispatch) {
  return {
    createTodo: (text) => dispatch(addTodo(text)),
  };
}

const Form = (props) => {
  const [text, getText] = useState('');
  const inputRef = useRef();

  const getTextFromInput = (e) => {
    getText(e.target.value);
  };
  const addTodoButton = (e) => {
    const { createTodo } = props;
    e.preventDefault();
    createTodo(text);
    getText('');
  };

  return (
    <Wrapper>
      <UserInput
        maxLength={255}
        ref={inputRef}
        value={text}
        placeholder="Add your new todo"
        onMouseEnter={() => {
          inputRef.current.focus();
        }}
        onChange={getTextFromInput}
      />
      <Button onClick={addTodoButton}>
        <FaPlus />
      </Button>
    </Wrapper>
  );
};

export default connect(null, mapDispatch)(Form);
