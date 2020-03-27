import React from 'react'
import { MDBRow, MDBCol } from 'mdbreact'

export const Spinner = () => {
  return (
    <MDBRow className="mt-5">
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
