import React from "react";
import {Route, Switch} from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

import TaskNew from "./tasks/new";
import TaskIndex from "./tasks/index";
import TaskShow from "./subtasks/show";
import TaskEdit from "./subtasks/edit"
import TaskDestroy from "./subtasks/destroy"

import SubTaskNew from "./subtasks/new";
import SubTaskIndex from "./subtasks/index";
import SubTaskShow from "./tasks/show";
import SubTaskEdit from "./tasks/edit"
import SubTaskDestroy from "./tasks/destroy"

import Register from "./sessions/register";
import Login from "./sessions/login";
import Logout from "./sessions/logout";


function Routes () {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/tasks/new" component = {TaskNew}/>
            <Route exact path="/tasks" component = {TaskIndex}/>
            <Route exact path="/tasks/:id" component = {TaskShow}/>
            <Route exact path="/tasks/:id/edit" component = {TaskEdit}/>
            <Route exact path="/tasks/:id/destroy" component = {TaskDestroy}/>
            <Route exact path="/tasks/:id/subtasks/new" component = {SubTaskNew}/>
            <Route exact path="/tasks/:id/subtasks" component = {SubTaskIndex}/>
            <Route exact path="/tasks/:id/subtasks/:id" component = {SubTaskShow}/>
            <Route exact path="/tasks/:id/subtasks/:id/edit" component = {SubTaskEdit}/>
            <Route exact path="/tasks/:id/subtasks/:id/destroy" component = {SubTaskDestroy}/>
            <Route exact path="/register" component = {Register} />
            <Route exact path="/login" component = {Login} />  
            <Route exact path="/logout" component = {Logout} />
        </Switch>
    )
   }
   
   export default Routes;
