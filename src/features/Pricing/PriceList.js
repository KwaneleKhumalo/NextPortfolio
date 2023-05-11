import { Card, Button, Row, Col, Container, ListGroup } from "react-bootstrap"
import { FaCheckCircle } from "react-icons/fa"
import { Prices } from "@/assets/shared/Prices"

const PriceList = () => {
  return (
    <Row className="mx-auto text-center p-5">
      <Col md="12" className="mb-5">
        <h3>Add Value to your Business</h3>
      </Col>
      {Prices.map(price => (
        <Card key={price.id} className="mt-4 mx-auto col-md-3 text-center p-0 shadow shadow-lg border-0" style={{ width: "27rem" }}>
          <Card.Img src={price.media.src} alt={price.name} style={{ height: "20rem", objectFit: "cover" }} />
          <Card.Title className="p-3"> {price.service} </Card.Title>
          <Card.Body>
            {price.services.map((item, idx) => (
              <ListGroup as="ol" key={idx}>
                <ListGroup.Item as="li" className="text-left d-flex justify-content-between align-items-center border-0">
                  {item} <FaCheckCircle className="text-info" size={20} />
                </ListGroup.Item>
              </ListGroup>
            ))}
          </Card.Body>
          <Button variant="info" className="mt-5 w-50 mx-auto mb-5 text-light shadow">
            Interested
          </Button>
        </Card>
      ))}
    </Row>
  )
}

export default PriceList
