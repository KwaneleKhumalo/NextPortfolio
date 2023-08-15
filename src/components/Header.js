import NavMenu from "./Navbar"
import { Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"

const Header = (props) => {
  
  const { className, headerText, subText, headerImg } = props
  
  const styles = {
    backgroundImage: `${headerImg}`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }

  const container = {
    hidden: { x: 100 },
    show: { x: 0, transition: { duration: 0.75, ease: "easeOut" } }
  }

  const title = {
    hidden: { opacity: 0 },
    show: {opacity: 1, transition: {duration: 2}}
  }


  return (
    <>
      <Row className={className} style={styles}>
        <Col md={12}>
          <NavMenu />
        </Col>
        <motion.div className="text-center col" style={{ zIndex: 10 }} variants={container} initial="hidden" animate="show">
          <Row className="row">
            <Col sm={12}>
              <motion.h1 variants={title} initial="hidden" animate="show" className="text-center text-light px-5 mx-auto"> {headerText} </motion.h1>
            </Col>
            <Col md={6} lg={12} className="mt-3 mx-auto">
              <p  className="text-center text-light col-11 col-md-4 mx-auto" style={{ fontSize: "20px" }}>
                {subText}{" "}
              </p>
            </Col>
          </Row>
        </motion.div>
      </Row>
    </>
  )
}



export default Header
