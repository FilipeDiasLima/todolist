import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {IoIosAddCircle, IoIosSquare, IoIosCheckbox} from 'react-icons/io';
import {FiPower} from 'react-icons/fi'

import taskIcon from '../../assets/icons/task-list.svg';

import { Container, Logo, Icons } from './styles';
  
function Home(){
  const location = useLocation().pathname;

  const [selected, setSelected] = useState("unselected");

  function selectedButton() {
    if (selected === "selected") {
      // já selecionado
      const newClassname = "unselected";
      setSelected(newClassname);
    }
    if (selected === "unselected") {
      const newClassname = "selected";
      setSelected(newClassname);
    }
  }

  return(
    <Container>
      <Logo>
        <img src={taskIcon} alt="Tasks-icon"/>
      </Logo>
      <Icons>
      <div className="link">
          <Link
            to="/add-task"
            onClick={selectedButton}
            className={location === "/add-task" ? "selected" : ""}
          >
            <IoIosAddCircle size={35} />
          </Link>
        </div>

        <div className="link">
          <Link
            to="/home"
            onClick={selectedButton}
            className={location === "/home" ? "selected" : ""}
          >
            <IoIosSquare size={38} />
          </Link>
        </div>

        <div className="link">
          <Link
            to="/checked-tasks"
            onClick={selectedButton}
            className={location === "/checked-tasks" ? "selected" : ""}
          >
            <IoIosCheckbox size={35} />
          </Link>
        </div>

        <div className="link">
          <Link
            to="/logout"
            onClick={selectedButton}
            className={location === "/check-items" ? "selected" : ""}
          >
            <FiPower size={32} />
          </Link>
        </div>
      </Icons>
    </Container>
  );
}

export default Home;