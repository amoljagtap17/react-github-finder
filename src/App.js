import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MDBContainer } from 'mdbreact'
import { Home, About, FourOhFour } from './pages'
import { Navbar } from './components'
import { GithubState } from './contexts'

const App = () => (
  <GithubState>
    <Router>
      <Navbar />
      <MDBContainer className="mt-5">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route component={FourOhFour} />
        </Switch>
      </MDBContainer>
    </Router>
  </GithubState>
)

export default App
