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
    <div className="nav-container">
      <Button variant="0" onClick={handleShow} className="me-2 col-3 col-md-1 bg-none justify-content-center d-flex p-3" style={{ height: "10%" }}>
        <MdOutlineMenu size="40" color="white" />
      </Button>

      <Offcanvas show={show} onClick={handleClose} className="bg-dark text-light h-100" placement="top">
        <Offcanvas.Header>
          <VscChromeClose size={40} style={{cursor:"pointer"}}/>
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
