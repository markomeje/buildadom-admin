import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap';

type SidebarProps = {
  showSidebar: boolean,
  handleClose: () => void
}
export default function Sidebar({ showSidebar = false, handleClose}: SidebarProps) {
  return (
    <>
      <Offcanvas show={showSidebar} onHide={handleClose}>
        <Offcanvas.Header closeButton style={{  fontSize: '14px', }}>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
