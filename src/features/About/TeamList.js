import { Card, Button, Nav } from "react-bootstrap"
import { Team } from "@/assets/shared/Team"

const TeamList = props => {
  return (
    <>
      {Team.map(mate => (
        <Card key={mate.id} className={`col-6 text-center mx-auto p-0 border-0 shadow shadow-lg `} style={{ width: "35rem" }}>
          {mate.id === 2 ? <Card.Img src={mate.Media.src} style={{ objectFit: "cover", height: "35rem" }} alt={mate.Name} /> : <Card.Img src={mate.Media.src} style={{ height: "35rem" }} alt={mate.Name} />}
          <Card.Header>
            <h5>{mate.Name}</h5>
          </Card.Header>
          <Card.Body className="mb-5 mt-5">
            <p>{mate.Description}</p>
          </Card.Body>
          <Nav.Link href={`/about/${mate.id}&&${mate.Name}`} className="text-light col-4 mx-auto mb-5 btn btn-info p-2">
            Learn More
          </Nav.Link>
        </Card>
      ))}
    </>
  )
}

export default TeamList
