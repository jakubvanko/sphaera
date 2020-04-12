import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import "./main.css"

import {
    URL_CONTACT,
    URL_HOME,
    URL_LOGIN,
    URL_PROFILE,
    URL_TICKETS,
    URL_VISIT,
    URL_CART
} from "../scripts/constants/urls";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Visit from "./Visit/Visit";
import Contact from "./Contact/Contact";
import Login from "./Login/Login";
import Tickets from "./Tickets/Tickets";
import Cart from "./Cart/Cart";
import Profile from "./Profile/Profile";

const Main = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path={URL_HOME} component={Home}/>
            <Route path={URL_TICKETS} component={Tickets}/>
            <Route path={URL_CONTACT} component={Contact}/>
            <Route path={URL_VISIT} component={Visit}/>
            <Route path={URL_PROFILE} component={Profile}/>
            <Route path={URL_CART} component={Cart}/>
            <Route path={URL_LOGIN} component={Login}/>
        </Switch>
        <Footer/>
    </BrowserRouter>
);

export default Main;
