import React, { useContext } from 'react'
import { MDBAlert, MDBIcon } from 'mdbreact'
import { AlertContext } from '../../contexts'

export const Alert = () => {
  const alertContext = useContext(AlertContext)

  const { alert } = alertContext

  return (
    alert !== null && (
      <MDBAlert color={alert.type}>
        <MDBIcon icon="info-circle" /> {alert.msg}
      </MDBAlert>
    )
  )
}
