import NavMenu from "./Navbar"
import { Row, Col } from "react-bootstrap"
// import SideNav from "./sideNav"

const Header = (props) => {
  const {className, headerText, subText, headerImg} = props
  return (
    <>
      <Row className={className} style={ { backgroundImage: `${headerImg}` }}>
        <Col md="12">
          <NavMenu />
        </Col>
        <Col className="text-center h-25" style={{zIndex: 10}}>
          <h1 className="text-center text-light"> {headerText} </h1>
          <p className="text-center text-light col-md-4 mx-auto mt-4"> {subText} </p>
        </Col>
      </Row>
    </>
  )
}

export default Header
