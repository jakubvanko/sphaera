import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./main.css";

import { RouteLogin } from "../components/RouteLogin";
import {
  URL_CONTACT,
  URL_HOME,
  URL_LOGIN,
  URL_PROFILE,
  URL_TICKETS,
  URL_VISIT,
  URL_CART,
  URL_ADMIN,
  URL_EVENT,
} from "../scripts/constants/urls";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Visit from "./Visit";
import Contact from "./Contact";
import Login from "./Login";
import Tickets from "./Tickets";
import Cart from "./Cart";
import Profile from "./Profile";
import Admin from "./Admin";
import Event from "./Event/Event";

const Main = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path={URL_HOME} component={Home} />
      <Route path={URL_TICKETS} component={Tickets} />
      <Route path={URL_EVENT + ":id"} component={Event} />
      <Route path={URL_CONTACT} component={Contact} />
      <Route path={URL_VISIT} component={Visit} />
      <RouteLogin path={URL_PROFILE}>
        <Profile />
      </RouteLogin>
      <Route path={URL_CART} component={Cart} />
      <Route path={URL_LOGIN} component={Login} />
      <RouteLogin path={URL_ADMIN}>
        <Admin />
      </RouteLogin>
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Main;
