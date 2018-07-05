import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Welcome from '././components/Welcome/Welcome';
import Home from '././components/Home/Home';
import Login from '././components/Login/Login';
import NotFound from '././components/NotFound/NotFound';


const Routes = () => (
    <BrowserRouter >
        <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route path="/Home" component={Home}/>
            <Route path="/Login" component={Login}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </BrowserRouter>
);
export default Routes;