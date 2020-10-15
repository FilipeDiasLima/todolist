import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

import { addTask } from '../../store/modules/todo/actions'
import SideBar from '../../components/SideBar';
import {Container, Titles, Content, NewCard, Text, Time} from './styles';

function AddTask(){
  const history = useHistory();
  const dispatch = useDispatch();
  
  function handleSubmit(title, description, time, date){

    dispatch(addTask(title, description, time, date))
  }

  function cancelNewTask(){
    history.push('/home');
  }

  return (
    <>
    <SideBar/>
    <Container>
      <Titles>
        <h1>ToDoList</h1>
        <h2>Adicionar Tarefa</h2>
      </Titles>
      <Form onSubmit={handleSubmit}>
        <Content>
          <NewCard>
            <Text>
              <Input 
                name="title" 
                maxLength="23" 
                placeholder="Titulo"
              />
              <Input
                multiline 
                className="description" 
                name="description" 
                rows="3" 
                maxLength="78" 
                placeholder="Descrição"
              />
            </Text>
            <Time>
                <Input
                  name="time"
                  type="time"
                  required
                />
                <Input
                  name="date"
                  type="date"         
                />
            </Time>
          </NewCard>
          <button className="add" type="submit">Adicionar</button>
          <button className="cancel" onClick={cancelNewTask} type="button">Cancelar</button>
        </Content>
      </Form>
    </Container>
    </>
  );
}

export default AddTask;