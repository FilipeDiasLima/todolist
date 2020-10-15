import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import {signInRequest} from '../../store/modules/auth/actions'
import {Container, Content, Background} from './styles';

const schema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
})

function Login() {
  const dispatch = useDispatch();

  function handleSubmite({ email, password}) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Content>
        <h1>ToDoList</h1>
        <Form schema={schema} onSubmit={handleSubmite}>
          <h2>Faça seu logon</h2>
          <Input 
            name="email"
            type="email"
            placeholder="E-mail"
          />
          <Input 
            name="password"
            type="password" 
            placeholder="Senha"
          />

          <button type="submit">Entrar</button>
        </Form>
        <Link to="/register">Criar uma conta</Link>
      </Content>
      <Background />
    </Container>
  );
}

export default Login;