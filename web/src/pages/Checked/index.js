import React, {useState, useEffect} from 'react';
import {IoIosCheckbox, IoIosCreate, IoIosCloseCircle} from 'react-icons/io';

import api from '../../services/api';

import SideBar from '../../components/SideBar';
import { Container, Titles, Cards, CardContainer, CardContent, CardIcons  } from './styles';

function Home(){
  const [cards, setCards] = useState([]);

  async function loadCards(){
    const {data} = await api.get('tasks-check');
    setCards(data);
  }

  useEffect(() => {
    loadCards();
  },[])
  return(
    <>
    <SideBar />
    <Container>
      <Titles>
        <h1>ToDoList</h1>
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
                <IoIosCheckbox size={28}/>
                <IoIosCreate size={28}/>
                <IoIosCloseCircle size={28}/>
              </CardIcons>
            </CardContainer>
          ))}
      </Cards>
    </Container>
    </>
  );
}

export default Home;