import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { MDBContainer } from 'mdbreact'
import { Navbar, UserList } from './components'

const App = () => (
  <Router>
    <Navbar />
    <MDBContainer className="mt-5">
      <UserList />
    </MDBContainer>
  </Router>
)

export default App
