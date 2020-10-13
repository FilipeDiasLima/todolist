import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';

import history from '../services/history';

import Login from '../pages/Login';
import Register from '../pages/Register';
import AddTask from '../pages/AddTask';
import Home from '../pages/Home';
import Checked from '../pages/Checked';
import EditTask from '../pages/EditTask';


function Routes(){
  return(
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/add-task" component={AddTask} isPrivate/>
        <Route path="/home" component={Home} isPrivate/>
        <Route path="/checked-tasks" component={Checked} isPrivate/>
        <Route path="/edit-task" component={EditTask} isPrivate/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;