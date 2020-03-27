import React from 'react'
import PropTypes from 'prop-types'
import { MDBListGroup } from 'mdbreact'
import { RepoItem } from './RepoItem'

export const RepoList = ({ repos }) => (
  <MDBListGroup>
    {repos.map(repo => (
      <RepoItem repo={repo} key={repo.id} />
    ))}
  </MDBListGroup>
)

RepoList.propTypes = {
  repos: PropTypes.array.isRequired
}
