import React, {useState, useEffect} from 'react';
import {IoIosCheckbox, IoIosCreate, IoIosCloseCircle} from 'react-icons/io';
import {Link, useHistory} from 'react-router-dom';

//import randomColor from '../../utils/randomColor';
import api from '../../services/api';

import SideBar from '../../components/SideBar';
import { Container, Titles, Cards, CardContainer, CardContent, CardIcons } from './styles';

function Home(){
  const history = useHistory();
  const [cards, setCards] = useState([]); 

  async function loadTasksCards() {
    const response = await api.get('tasks');
    setCards(response.data);
  }
  
  useEffect(() => {
    loadTasksCards();
  }, [setCards]);

  //let backgroundColor = String(randomColor());

  async function toggleCheckTask(id){
    await api.put(`tasks-check/${id}`,{
      "finished": true,
    });
    
  }

  function handleEditTask(id){
    history.push(`/edit-task/${id}`);
  }

  async function handleDeleteTask(id){
    await api.delete(`tasks/${id}`);

    setCards(cards.filter(card => card.id !== id));
  }

  return(
    <>
    <SideBar />
    <Container>
      <Titles>
        <h1>ToDoList</h1>
        <h2>Não Finalizadas</h2>
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
              <button type="button" onClick={() => handleEditTask(card.id)}>
                <IoIosCreate size={28}/>
              </button>
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

export default Home;