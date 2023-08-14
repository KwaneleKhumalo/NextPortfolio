import NavMenu from "./Navbar"
import { Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"

const Header = (props) => {
  
  const { className, headerText, subText, thirdText, headerImg } = props
  
  const styles = {
    backgroundImage: `${headerImg}`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }

  return (
    <>
      <Row className={className} style={styles}>
        <Col md="12">
          <NavMenu />
        </Col>
        <Col sm={12} className="text-center" style={{ zIndex: 10 }}>
          <Row>
            <Col sm={12}>
              <h1 className="text-center text-light w-75 mx-auto"> {headerText} </h1>
            </Col>
            <Col>
              <p className="text-center text-light col-md-4 mx-auto" style={{ fontSize: "20px" }}>
                {subText}{" "}
              </p>

            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}



export default Header
