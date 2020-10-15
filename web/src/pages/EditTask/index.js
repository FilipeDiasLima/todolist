import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import {useParams, useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import {updateTaskRequest} from '../../store/modules/todo/actions'
import api from '../../services/api';
import SideBar from '../../components/SideBar';
import {Container, Titles, Content, NewCard, Text, Time} from './styles';


function EditTask(){
  const {id} = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const [task, setTask] = useState({});
  
  useEffect(() => {
    api.get(`/tasks/${id}`).then(response => {
      setTask(response.data);
    });
  }, [id]);

  function handleSubmit(data){
    dispatch(updateTaskRequest(id, data))
  }

  function cancelEdit(){
    history.push('/home')
  }

  return (
    <>
    <SideBar/>
    <Container>
      <Titles>
        <h1>ToDoList</h1>
        <h2>Editar tarefa</h2>
      </Titles>
      <Form initialData={task} onSubmit={handleSubmit}>
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
          <button className="cancel" onClick={cancelEdit} type="button">Cancelar</button>
        </Content>
      </Form>
    </Container>
    </>
  );
}

export default EditTask;