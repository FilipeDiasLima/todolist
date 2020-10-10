import React from 'react';
import { Link } from 'react-router-dom';

import {Container, Content, Background} from './styles';

function Login() {
  return (
    <Container>
      <Content>
        <h1>ToDoList</h1>
        <form>
          <h2>Faça seu logon</h2>
          <input name="email" placeholder="E-mail"/>
          <input name="password" type="password" placeholder="Senha"/>

          <button type="submit">Entrar</button>
        </form>
        <Link to="/register">Criar uma conta</Link>
      </Content>
      <Background />
    </Container>
  );
}

export default Login;