import NavMenu from "./Navbar"
import { Row, Col } from "react-bootstrap"
// import SideNav from "./sideNav"

const Header = (props) => {
  const {className, headerText, subText} = props
  return (
    <>
      <Row className={className}>
        {/* <SideNav /> */}
        <Col md='12'>
          <NavMenu className="border" />
        </Col>
        <Col className="text-center h-25">
          <h1 className="text-center text-light"> {headerText} </h1>
          <p className="text-center text-light col-md-4 mx-auto mt-4"> {subText} </p>
        </Col>
      </Row>
    </>
  )
}

export default Header
