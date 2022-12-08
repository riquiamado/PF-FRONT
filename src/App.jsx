import React from 'react'
import { Route } from 'react-router-dom'
import CardDetails from './components/cardsDetail'
import CreateServices from './components/createServices'
import CreateUser from './components/createUser'
import Home from './components/home'
import LandingPage from './components/landingPage'


function App() {
 

  return (
    <div className="App">
      
      <Route exact path={'/'} component={LandingPage}/>
      <Route exact path={'/home'} component={Home}/>
      <Route exact path="/users" component={CreateUser}/>
      <Route exact path="/services" component={CreateServices}/>
      <Route path="/services/:_id" component={CardDetails} />
     
    </div>
  )
}

export default App
