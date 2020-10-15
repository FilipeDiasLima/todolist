import React from 'react';
import { Form, Input } from '@rocketseat/unform';


import SideBar from '../../components/SideBar';
import {Container, Titles, Content, NewCard, Text, Time} from './styles';


function EditTask(){
  function handleSubmit(){
      
  }

  return (
    <>
    <SideBar/>
    <Container>
      <Titles>
        <h1>ToDoList</h1>
        <h2>Editar tarefa</h2>
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
          <button className="cancel" type="button">Cancelar</button>
        </Content>
      </Form>
    </Container>
    </>
  );
}

export default EditTask;