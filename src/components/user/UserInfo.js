import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBBadge,
  MDBCard,
  MDBCardBody,
  MDBListGroup,
  MDBListGroupItem,
  MDBLink
} from 'mdbreact'
import { RepoList } from '../repo/RepoList'
import { Spinner } from '../layout/Spinner'
import { GithubContext } from '../../contexts'

export const UserInfo = () => {
  const { login: loginId } = useParams()
  const githubContext = useContext(GithubContext)

  const { getUser, loading, user, repos, getUserRepos } = githubContext

  useEffect(() => {
    getUser(loginId)
    getUserRepos(loginId)
    // eslint-disable-next-line
  }, [])

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user

  if (loading) return <Spinner />

  return (
    <>
      <MDBRow className="m-2">
        <MDBCol>
          <MDBLink
            to="/"
            className="d-inline-flex btn text-white primary-color mr-4"
          >
            Back To Search
          </MDBLink>
          Hireable:{' '}
          {hireable ? (
            <MDBIcon icon="check" className="green-text" size="2x" />
          ) : (
            <MDBIcon icon="times-circle" className="red-text" size="2x" />
          )}
        </MDBCol>
      </MDBRow>
      <MDBRow className="m-2">
        <MDBCol className="d-flex flex-column justify-content-center align-items-center">
          <img
            src={avatar_url}
            className="round-img mb-3 rounded-circle"
            alt=""
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </MDBCol>
        <MDBCol>
          <div>
            {bio && (
              <>
                <h3>Bio</h3>
                <p>{bio}</p>
              </>
            )}
            <MDBBtn
              href={html_url}
              target="_blank"
              color="elegant"
              className="m-0 my-2"
            >
              Visit Github Profile
            </MDBBtn>
            <MDBListGroup>
              <MDBListGroupItem>
                {login && (
                  <>
                    <strong>Username: </strong> {login}
                  </>
                )}
              </MDBListGroupItem>

              <MDBListGroupItem>
                {company && (
                  <>
                    <strong>Company: </strong> {company}
                  </>
                )}
              </MDBListGroupItem>

              <MDBListGroupItem>
                {blog && (
                  <>
                    <strong>Website: </strong> {blog}
                  </>
                )}
              </MDBListGroupItem>
            </MDBListGroup>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow className="m-2">
        <MDBCol>
          <MDBCard>
            <MDBCardBody className="d-flex flex-wrap justify-content-center">
              <h4>
                <MDBBadge className="p-2 mx-2" color="primary">
                  Followers: {followers}
                </MDBBadge>
              </h4>
              <h4>
                <MDBBadge className="p-2 mx-2" color="success">
                  Following: {following}
                </MDBBadge>
              </h4>
              <h4>
                <MDBBadge className="p-2 mx-2" color="light">
                  Public Repos: {public_repos}
                </MDBBadge>
              </h4>
              <h4>
                <MDBBadge className="p-2 mx-2" color="dark">
                  Public Gists: {public_gists}
                </MDBBadge>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow className="m-2">
        <MDBCol>
          <MDBCard>
            <MDBCardBody>
              <RepoList repos={repos} />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </>
  )
}
