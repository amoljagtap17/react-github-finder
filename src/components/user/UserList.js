import React, { useContext } from 'react'
import { MDBRow, MDBCol } from 'mdbreact'
import { Spinner } from '../layout/Spinner'
import { UserItem } from './UserItem'
import { GithubContext } from '../../contexts'

export const UserList = () => {
  const githubContext = useContext(GithubContext)

  const { loading, users } = githubContext

  if (loading) {
    return <Spinner />
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
