import React from 'react';

import SideBar from '../../components/SideBar';
import {Container, Titles, Content, NewCard, Text, Time} from './styles';

function EditTask(){
  return (
    <>
    <SideBar/>
    <Container>
      <Titles>
        <h1>ToDoList</h1>
        <h2>Editar tarefa</h2>
      </Titles>
      <Content>
        <NewCard>
          <Text>
            <input name="title" maxLength="23" placeholder="Titulo" />
            <textarea className="description" name="description" rows="3" maxLength="78" placeholder="Descrição" />
          </Text>
          <Time>
            <div className="time">
              <input name="hour" type="number" min="0" max="23" placeholder="Hora"/>
              <input name="minutes" type="number" min="0" max="59" placeholder="Min"/>
            </div>
            <div className="date">
              <input name="days" type="number" min="1" max="31" placeholder="Dia"/>
              <input name="month" type="number" min="1" max="12" placeholder="Mês"/>
            </div>
          </Time>
        </NewCard>
        <button className="add" type="button">Salvar</button>
        <button className="cancel" type="button">Cancelar</button>
      </Content>
    </Container>
    </>
  );
}

export default EditTask;