import React from 'react'
import { Route } from 'react-router-dom'
import LandingPage from '../Components/LandingPage/LandingPage.jsx'
import MainPage from '../Components/MainPage/MainPage.jsx'
import Creator from '../Components/Creator/Creator.jsx'
import Details from '../Components/Details/Details.jsx'
import Success from '../Components/Success/Success.jsx'

function Routes() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <LandingPage />} />
      <Route exact path="/home" render={() => <MainPage />} />
      <Route exact path="/creation" render={() => <Creator />} />
      <Route
        exact
        path="/pokemon/:pokemonId"
        render={({ match }) => <Details pokemon={{ match }} />}
      />
      <Route exact path="/success" render={() => <Success />} />
    </div>
  )
}

export default Routes
