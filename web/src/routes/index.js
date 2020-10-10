import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';

function Routes(){
  return(
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/register" exact component={Register}/>
    </Switch>
  )
}

export default Routes;