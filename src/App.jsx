import React from "react";
import { Route } from "react-router-dom";
import CardDetails from "./components/cardsDetail";
import Cart from "./components/carrito";
import CreateServices from "./components/createServices";
import CreateUser from "./components/createUser";
import Home from "./components/home";
import NavBar from "./components/navBar";
import "./App.css";
import { checkLogin } from "./components/checkLogin";
import Dashboard from "./components/dashboard";
import { ProfileLocal } from "./components/profileLocal";
import LoginUser from "./components/loginUser";
import Footer from "./components/footer/index";
import Payment from "./components/payment";



function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path={"/"} component={Home} />
      <Route exact path="/users" component={CreateUser} />
      <Route exact path="/services" component={CreateServices} />
      <Route exact path="/checkLogin" component={checkLogin} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/profile" component={ProfileLocal} />
      <Route exact path="/login" component={LoginUser} />
      <Route exact path="/payment" component={Payment} />
      <Route path="/services/:_id" component={CardDetails} />
      <Footer/>
    </div>
  );
}

export default App;
