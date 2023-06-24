import { Card, Button, Nav, Row, Col } from "react-bootstrap"
import { Team } from "@/assets/shared/Team"

const TeamList = props => {
  return (
    <Row className="mx-auto shadow mb-5 py-3">
      {Team.map(mate => (
        <Col sm={100} md={3} key={mate.id} className={`text-center mx-auto p-0 border-0 mt-5 py-3`} style={{ width: "35rem" }}>
          {mate.id === 2 ? <img className="w-50 rounded-circle shadow shadow-lg" src={mate.Media.src} style={{ objectFit: "cover", height: "45%" }} alt={mate.Name} /> : <img className="w-50 rounded-circle shadow shadow-lg" src={mate.Media.src} style={{ objectFit: "fill" }} alt={mate.Name} />}
          <Card.Header>
            <h5 className="mt-4">{mate.Name}</h5>
          </Card.Header>
          <Card.Body className="mb-5 mt-3">
            <p className="col-lg-8 col-md-8 col-100 mx-auto">{mate.Description}</p>
          </Card.Body>
          <Nav.Link href={`/about/${mate.id}&&${mate.Name}`} className="text-light w-50 mx-auto mb-2 btn btn-info p-2">
            Learn More
          </Nav.Link>
        </Col>
      ))}
    </Row>
  )
}

export default TeamList
