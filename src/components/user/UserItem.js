import React from 'react'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle
} from 'mdbreact'

export const UserItem = ({ user: { login, avatar_url, html_url } }) => {
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
        <MDBBtn href={html_url} color="mdb-color">
          More
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  )
}
