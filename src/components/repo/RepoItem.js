import React from 'react'
import PropTypes from 'prop-types'
import { MDBListGroupItem } from 'mdbreact'

export const RepoItem = ({ repo }) => (
  <MDBListGroupItem href={repo.html_url} hover>
    <h3>{repo.name}</h3>
  </MDBListGroupItem>
)

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}
