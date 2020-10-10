import React from 'react';
import { Link } from 'react-router-dom';


import {Container, Content, Background} from './styles';

function Register(){
  return(
    <Container>
      <Background />
      <Content>
        <h1>ToDoList</h1>
        <form>
          <h2>Faça seu cadastro</h2>
          <input name="name" placeholder="Nome"/>
          <input name="email" placeholder="E-mail"/>
          <input name="password" type="password" placeholder="Senha"/>

          <button type="submit">Cadastrar</button>
        </form>
        <Link to="/">Voltar para Logon</Link>
      </Content>
    </Container>
  );
}

export default Register;