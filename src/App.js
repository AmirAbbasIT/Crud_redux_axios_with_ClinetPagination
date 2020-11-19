import logo from './logo.svg';
import './App.css';
import Show from './Components/Show';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import UsersListing from './Components/ComUsers/UsersListing';
import AddUser from './Components/ComUsers/AddUser';
import ShowUser from './Components/ComUsers/ShowUser';
import UpdateUser from './Components/ComUsers/UpdateUser';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUserPrac from './Components/ComUsers/AddUserPrac';
function App() {
  return (
    
    <Router>
        <Switch>
          <Route exact path="/" component={UsersListing} />
          <Route  path="/users" component={UsersListing} />
          <Route  path="/user/adduser" component={AddUser} />
          <Route  path="/user/adduserpractice" component={AddUserPrac} />
          <Route  path="/user/viewuser/:id" component={ShowUser} />
          <Route  path="/user/edituser/:id" component={UpdateUser} />
        </Switch>
      </Router>
   
  );
}

export default App;
