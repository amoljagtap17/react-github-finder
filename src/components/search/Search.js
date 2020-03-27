import React, { useState, useContext } from 'react'
import { MDBInput, MDBBtn } from 'mdbreact'
import { AlertContext, GithubContext } from '../../contexts'

export const Search = () => {
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)

  const [text, setText] = useState('')

  const onSubmit = e => {
    e.preventDefault()

    if (text === '') {
      alertContext.setAlert('Please enter something', 'warning')
    } else {
      githubContext.searchUsers(text)
      setText('')
    }
  }

  const onChange = e => setText(e.target.value)

  return (
    <div>
      <form onSubmit={onSubmit}>
        <MDBInput
          size="lg"
          name="text"
          label="Search Users..."
          value={text}
          onChange={onChange}
          icon="search"
        />
        <MDBBtn color="primary" type="submit" className="btn-block">
          Search
        </MDBBtn>
      </form>
      {githubContext.users.length > 0 && (
        <MDBBtn
          className="btn-block"
          color="mdb-color my-2"
          onClick={githubContext.clearUsers}
        >
          Clear
        </MDBBtn>
      )}
    </div>
  )
}
