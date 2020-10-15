import React, {useState, useEffect} from 'react';
import {IoIosCheckbox, IoIosCloseCircle} from 'react-icons/io';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import api from '../../services/api';
import {useSelector} from 'react-redux'

import SideBar from '../../components/SideBar';
import { Container, Titles, Cards, CardContainer, CardContent, CardIcons  } from './styles';

function CheckedTasks(){
  const [cards, setCards] = useState([]);
  const history = useHistory();
  const profile = useSelector(state => state.user.profile);

  async function loadTasksCards() {
    const response = await api.get('/tasks-check');
    setCards(response.data);
  }

  useEffect(() => {
    loadTasksCards();
  }, [setCards]);

  async function toggleCheckTask(id){
    await api.put(`/tasks-check/${id}`,{
      "finished": false,
    });
    history.push('/checked-tasks');
  }

  async function handleDeleteTask(id){
    await api.delete(`/tasks/${id}`);

    setCards(cards.filter(card => card.id !== id));
  }

  return(
    <>
    <SideBar />
    <Container>
      <Titles>
        <h1>Olá, {profile.name}</h1>
        <h2>Finalizadas</h2>
      </Titles>
      <Cards>
        {cards.map(card => (
            <CardContainer key={card.id}>
              <CardContent>
                <strong>{card.title}</strong>
                <span>{card.description}</span>
                <footer>
                  <span>{card.time}</span>
                  <span>{card.date}</span>
                </footer>
              </CardContent>
              <CardIcons>
                <Link to="" onClick={() => toggleCheckTask(card.id)}>
                  <IoIosCheckbox size={28}/>
                </Link>
                <Link to="" onClick={() => handleDeleteTask(card.id)}>
                  <IoIosCloseCircle size={28}/>
                </Link>
              </CardIcons>
            </CardContainer>
          ))}
      </Cards>
    </Container>
    </>
  );
}

export default CheckedTasks;