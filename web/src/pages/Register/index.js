import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import {signUpRequest} from '../../store/modules/auth/actions'

import {Container, Content, Background} from './styles';

function Register(){
  const dispatch = useDispatch();

  function handleSubmit({name, email, password}){
    dispatch(signUpRequest(name, email, password))
  }

  return(
    <Container>
      <Background />
      <Content>
        <h1>ToDoList</h1>
        <Form onSubmit={handleSubmit}>
          <h2>Faça seu cadastro</h2>
          <Input name="name" placeholder="Nome"/>
          <Input name="email" type="email" placeholder="E-mail"/>
          <Input name="password" type="password" placeholder="Senha"/>

          <button type="submit">Cadastrar</button>
        </Form>
        <Link to="/">Voltar para Logon</Link>
      </Content>
    </Container>
  );
}

export default Register;