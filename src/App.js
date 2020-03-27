import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MDBContainer } from 'mdbreact'
import { Home, About, FourOhFour } from './pages'
import { Navbar, Alert, UserInfo } from './components'
import { AlertState, GithubState } from './contexts'

const App = () => (
  <GithubState>
    <AlertState>
      <Router>
        <Navbar />
        <MDBContainer className="mt-5 mb-5">
          <Alert />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/user/:login">
              <UserInfo />
            </Route>
            <Route component={FourOhFour} />
          </Switch>
        </MDBContainer>
      </Router>
    </AlertState>
  </GithubState>
)

export default App
