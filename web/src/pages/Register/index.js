import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import {signUpRequest} from '../../store/modules/auth/actions'

import {Container, Content, Background} from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  password: Yup.string().min(6,'No mínimo 6 caracteres').required('A senha é obrigatória'),
})

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
        <Form schema={schema} onSubmit={handleSubmit}>
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