import React from 'react';
import {IoIosCheckbox, IoIosCreate, IoIosCloseCircle} from 'react-icons/io';

import {Container, Content, Icons} from './styles';

function Card(){
  return(
    <Container>
      <Content>
        <strong>Titulo da tarefa</strong>
        <span>Nota qualquer para eded ecefef xedefdmplo de como vai ficar no max de tamanho</span>
        <footer>
          <span>20:30</span>
          <span>15/11</span>
        </footer>
      </Content>
      <Icons>
        <IoIosCheckbox size={28}/>
        <IoIosCreate size={28}/>
        <IoIosCloseCircle size={28}/>
      </Icons>
    </Container>
  )
}

export default Card;