import React from "react";
import { Route } from "react-router-dom";
import CardDetails from "./components/cardsDetail";
import CreateServices from "./components/createServices";
import CreateUser from "./components/createUser";
import FormRatingReview from "./components/formRatingReview";
import Home from "./components/home";
import NavBar from "./components/navBar";
import "./App.css";
import { checkLogin } from "./components/checkLogin";
import Dashboard from "./components/dashboard";
import LoginUser from "./components/loginUser";
import Footer from "./components/footer/index";
import Payment from "./components/payment";
import PaymentDeclined from "./components/paymentDeclined";
import ServiceEdit from "./components/serviceEdit";
import DashboardAdmin from "./components/dashboardAdmin";
import { Rate } from "./components/rate";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path={"/"} component={Home} />
      <Route exact path="/users" component={CreateUser} />
      <Route exact path="/services" component={CreateServices} />
      <Route exact path="/checkLogin" component={checkLogin} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/dashboardAdmin" component={DashboardAdmin} />
      <Route exact path="/login" component={LoginUser} />
      <Route exact path="/payment" component={Payment} />
      <Route exact path="/paymentDeclined" component={PaymentDeclined} />
      <Route path="/services/:_id" component={CardDetails} />
      <Route path="/servicesEdit/:_id" component={ServiceEdit} />
      <Route path="/create" component={CreateServices} />
      <Route path="/rate/:orderId/:name/:serviceId" component={Rate} />
      <Footer/>
    </div>
  );
}

export default App;
