import React from 'react'
import { Route } from 'react-router-dom'
import CardDetails from './components/cardsDetail'
import CreateUser from './components/createUser'
import Home from './components/home'


function App() {
 

  return (
    <div className="App">
      
      <Route exact path="/users" component={CreateUser}/>
      <Route exact path={'/home'} component={Home}/>
      <Route path="/provider/:id" component={CardDetails} />
     
    </div>
  )
}

export default App
