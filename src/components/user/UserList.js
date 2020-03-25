import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MDBRow, MDBCol } from 'mdbreact'
import { UserItem } from './UserItem'

export const UserList = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getGithubUsers = async () => {
      const { data } = await axios.get('https://api.github.com/users')

      setUsers(data)
      setLoading(false)
    }

    getGithubUsers()
  }, [])

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
