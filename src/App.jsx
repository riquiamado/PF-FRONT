import React from 'react'
import { Route } from 'react-router-dom'
import CardDetails from './components/cardsDetail'
import Home from './components/home'
import NavBar from './components/navBar'

function App() {
 

  return (
    <div className="App">
       <NavBar/>
      <Route path="/provider/:_id" component={CardDetails} />
      <Route exact path={'/home'} component={Home}/>
     
    </div>
  )
}

export default App
