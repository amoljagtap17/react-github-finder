import React, { useContext } from 'react'
import { MDBRow, MDBCol } from 'mdbreact'
import { UserItem } from './UserItem'
import { GithubContext } from '../../contexts'

export const UserList = () => {
  const githubContext = useContext(GithubContext)

  const { loading, users } = githubContext

  if (loading) {
    return (
      <MDBRow>
        <MDBCol className="text-center">
          <div
            style={{ width: '4rem', height: '4rem' }}
            className="spinner-border text-primary"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </MDBCol>
      </MDBRow>
    )
  }

  return (
    <MDBRow>
      {users.map(user => (
        <MDBCol key={user.id} size="12" sm="6" md="4" className="p-3">
          <UserItem user={user} />
        </MDBCol>
      ))}
    </MDBRow>
  )
}
