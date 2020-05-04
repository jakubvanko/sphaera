import "./main.css";

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import RoutePermission from "../components/RoutePermission/RoutePermission";
import {
  URL_ADMIN,
  URL_CART,
  URL_CONTACT,
  URL_EVENT,
  URL_HOME,
  URL_LOGIN,
  URL_PROFILE,
  URL_TICKETS,
  URL_VISIT,
} from "../scripts/constants/urls";
import Admin from "./Admin";
import Cart from "./Cart";
import Contact from "./Contact";
import Event from "./Event/Event";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Tickets from "./Tickets";
import Visit from "./Visit";

const Main = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path={URL_HOME} component={Home} />
      <Route path={URL_TICKETS} component={Tickets} />
      <Route path={`${URL_EVENT}:id`} component={Event} />
      <Route path={URL_CONTACT} component={Contact} />
      <Route path={URL_VISIT} component={Visit} />
      <RoutePermission type={"login"} path={URL_PROFILE} component={Profile} />
      <Route path={URL_CART} component={Cart} />
      <RoutePermission type={"nologin"} path={URL_LOGIN} component={Login} />
      <RoutePermission type={"admin"} path={URL_ADMIN} component={Admin} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Main;
