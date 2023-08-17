import { Card, Row, Col, ListGroup } from "react-bootstrap"
import { FaCheckCircle } from "react-icons/fa"
import { Prices } from "@/assets/shared/Prices"

const PriceList = () => {
  return (
    <Row className="mx-auto text-center mb-5">
      <Col md="12" className="mb-5 bg-light text-center p-5 shadow">
        <h1 className="text-center mb-5" style={styles.textDecor}>
          Add Value to your Business
        </h1>
        <h5 className="col col-md-8 col-lg-5 text-center mx-auto mt-3">Let's help you transform the way your business operates. We provide scalable services, equipping you with more bandwidth to reach more customers, maximize your business visibility and help define and implement your brand's communication strategy. </h5>
      </Col>
      {Prices.map(price => (
        <Card key={price.id} className="mt-4 mx-auto col-md-3 text-center p-0 shadow shadow-lg border-0" style={{ width: "27rem" }}>
          <Card.Img src={price.media.src} alt={price.name} style={{ height: "20rem", objectFit: "cover" }} />
          <Card.Title className="p-3" style={styles.textDecor}>
            {price.service}{" "}
          </Card.Title>
          <Card.Body>
            {price.services.map((item, idx) => (
              <ListGroup as="ol" key={idx}>
                <ListGroup.Item as="li" className="text-left d-flex justify-content-between align-items-center border-0">
                  {item} <FaCheckCircle className="text-info" size={20} />
                </ListGroup.Item>
              </ListGroup>
            ))}
          </Card.Body>
        </Card>
      ))}
    </Row>
  )
}

const styles = {
  textDecor: {
    textDecorationLine: "underline",
    textDecorationColor: "#5bc0de",
    textUnderlineOffset: "10px"
  }
}

export default PriceList
