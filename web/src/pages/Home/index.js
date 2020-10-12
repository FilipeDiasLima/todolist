import React from 'react';

import Card from '../../components/Cards';
import SideBar from '../../components/SideBar';
import { Container, Titles, Cards } from './styles';

function Home(){
  return(
    <>
    <SideBar />
    <Container>
      <Titles>
        <h1>ToDoList</h1>
        <h2>Não Finalizadas</h2>
      </Titles>
      <Cards>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Cards>
    </Container>
    </>
  );
}

export default Home;