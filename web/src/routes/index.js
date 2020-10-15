import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Register from '../pages/Register';
import AddTask from '../pages/AddTask';
import Home from '../pages/Home';
import Checked from '../pages/Checked';
import EditTask from '../pages/EditTask';


function Routes(){
  return(
    <>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/add-task" exact component={AddTask} isPrivate/>
        <Route path="/home" exact component={Home} isPrivate/>
        <Route path="/checked-tasks" exact component={Checked} isPrivate/>
        <Route path="/edit-task" exact component={EditTask} isPrivate/>
      </Switch>
    </>
  )
}

export default Routes;