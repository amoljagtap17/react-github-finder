import React from 'react'
import PropTypes from 'prop-types'
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBLink
} from 'mdbreact'

export const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <MDBCard className="text-center">
      <MDBCardImage
        style={{ width: '30%', margin: '1rem auto' }}
        className="img-fluid rounded-circle"
        src={avatar_url}
        waves
      />
      <MDBCardBody>
        <MDBCardTitle>{login}</MDBCardTitle>
        <MDBLink
          to={`/user/${login}`}
          className="btn mdb-color text-white"
          color="mdb-color"
        >
          More
        </MDBLink>
      </MDBCardBody>
    </MDBCard>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}
