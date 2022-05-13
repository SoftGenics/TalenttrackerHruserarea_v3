import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container } from 'react-bootstrap'
import './MyWorkSpace.css'
const MyWorkSpace = () => {
  return (
    <div>
      <Sidebar />
      <NavbarMenu />
      <Container className='myworkspace'>
        <h5 className='mt-5 text-muted fw-bold text-center'>My Work Space</h5>
      </Container>
    </div>
  )
}

export default MyWorkSpace