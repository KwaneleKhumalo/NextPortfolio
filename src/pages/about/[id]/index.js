import Header from "@/components/Header"
import NavMenu from "@/components/Navbar"
import { Col, Row } from "react-bootstrap"

const index = () => {
    const headerText = `Under Construction`
    const subText = `Please come back another time!`
    return (
      <>
        <Col md="12">
          <NavMenu />
        </Col>
        <Row>
          <Col>
            <h1>Hello</h1>
          </Col>
        </Row>
      </>
    )
}

export default index
