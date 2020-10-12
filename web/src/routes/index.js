import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import AddTask from '../pages/AddTask';
import Home from '../pages/Home';
import Checked from '../pages/Checked';
import EditTask from '../pages/EditTask';

function Routes(){
  return(
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/register" exact component={Register}/>
      <Route path="/add-task" exact component={AddTask}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/checked-tasks" exact component={Checked}/>
      <Route path="/edit-task" exact component={EditTask}/>
    </Switch>
  )
}

export default Routes;