import { Row, Col, Spinner } from "react-bootstrap"

const Loader = () => {
  return (
    <Row>
      <Col className="text-center p-5">
        <Spinner animation="border" role="status" variant="info">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Col>
      <Col sm={12} className="text-center">
        <strong>Loading ...</strong>
      </Col>
    </Row>
  )
}

export default Loader
