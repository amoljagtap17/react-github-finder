import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MDBContainer } from 'mdbreact'
import { Home, About, FourOhFour } from './pages'
import { Navbar, Alert } from './components'
import { AlertState, GithubState } from './contexts'

const App = () => (
  <GithubState>
    <AlertState>
      <Router>
        <Navbar />
        <MDBContainer className="mt-5">
          <Alert />
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
    </AlertState>
  </GithubState>
)

export default App
