import React, {useState, useEffect} from 'react';
import {IoIosCheckbox, IoIosCreate, IoIosCloseCircle} from 'react-icons/io';
import {Link, useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux'

//import randomColor from '../../utils/randomColor';
import api from '../../services/api';

import SideBar from '../../components/SideBar';
import { Container, Titles, Cards, CardContainer, CardContent, CardIcons } from './styles';

function Home(){
  const history = useHistory();
  const profile = useSelector(state => state.user.profile);

  const [cards, setCards] = useState([]); 

  async function loadTasksCards() {
    const response = await api.get('tasks');
    setCards(response.data);
  }
  
  useEffect(() => {
    loadTasksCards();
  }, []);
  

  //let backgroundColor = String(randomColor());

  async function toggleCheckTask(id){
    await api.put(`tasks-check/${id}`,{
      "finished": true,
    });
    loadTasksCards();
  }

  function handleEditTask(id){
    history.push(`/edit-task/${id}`);
  }

  async function handleDeleteTask(id){
    await api.delete(`tasks/${id}`);

    setCards(cards.filter(card => card.id !== id));
    //loadTasksCards();
  }

  return(
    <>
    <SideBar />
    <Container>
      <Titles>
        <h1>Olá, {profile.name}</h1>
        <h2>Suas Tarefas</h2>
      </Titles>
      <Cards>
        {cards.map(card => (
          <CardContainer key={card.id}
            className={card.finished === 1 ? "cardCheck" : ""}
          >
            <CardContent>
              <strong>{card.title}</strong>
              <span>{card.description}</span>
              <footer>
                <span>{card.time}</span>
                <span>{card.date}</span>
              </footer>
            </CardContent>
            <CardIcons>
              <button className="changeState" type="button" onClick={() =>   toggleCheckTask(card.id)}>
                <IoIosCheckbox size={28}/>
              </button>
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