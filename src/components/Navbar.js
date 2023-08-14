import { useState } from "react"
import { Container, Nav, Navbar, Button, Offcanvas } from "react-bootstrap"
import Link from "next/link"
import { MdOutlineMenu } from "react-icons/md"
import { VscChromeClose } from "react-icons/vsc"
import mainLogo from "../assets/images/header/digital_Circle_logo.png"

const NavMenu = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="nav-container bg-transparent position-absolute">
      <button variant="0" onClick={handleShow} className="me-2 ms-5 col-3 col-md-1 border-0 justify-content-start d-flex p-3 bg-transparent" style={{ height: "10%" }}>
        <MdOutlineMenu size="40" color="white" />
      </button>

      <Offcanvas show={show} onClick={handleClose} className="bg-dark text-light h-100" placement="top">
        <Offcanvas.Header>
          <VscChromeClose className="ms-5 mt-3 text-info" size={30} style={{ cursor: "pointer" }} />
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Container className="h-100 align-items-center">
            <Nav className="align-items-center justify-content-center flex-column d-flex h-100 text-light flex-column">
              <Navbar.Brand href="/">
                <img className="mb-5" src={mainLogo.src} alt="Digital Circle Logo" style={{ width: "100px" }} />
              </Navbar.Brand>
              <Link className="text-light nav-item nav-link" href="/">
                Home
              </Link>
              <Link className="text-light nav-item nav-link" href="/about">
                About
              </Link>
              <Link className="text-light nav-item nav-link" href="/pricing">
                Pricing
              </Link>
              <Link className="text-light nav-item nav-link" href="/portfolio">
                Work
              </Link>
            </Nav>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default NavMenu
