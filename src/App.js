import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Form from './components/form.js';
import Tasks from './components/tasks.js';
import './App.css';

const Wrapper = styled.div`
  height: 47rem;
  font-size: 16px;
  text-align: center;
  padding: 100px;
  margin: 0 auto;
  justify-content: center;
  background: linear-gradient(#67e6cd 0%, #4a80e7 100%);
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 430px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 40px 30px;
  gap: 15px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
`;
const Header = styled.h1`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Card>
          <Header>Todo App</Header>
          <Form />
          <Tasks />
        </Card>
      </Wrapper>
    );
  }
}

export default App;
