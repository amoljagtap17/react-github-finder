import React from 'react'
import PropTypes from 'prop-types'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle
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
        <MDBBtn href={`/user/${login}`} color="mdb-color">
          More
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}
