import Link from "next/link"
import { Row, Col, Nav, Form, Button } from "react-bootstrap"
import { FaBehanceSquare, FaGithubSquare, FaFacebookSquare } from "react-icons/fa"
const Footer = () => {
  const date = `\u00A9 ${new Date().getFullYear()}`
  return (
    <Row className="bg-dark p-5">
      <Col md="12" className="text-light text-center">
        <h3>Let's Get To Work!</h3>
      </Col>
      <Col>
        <Form className="col-sm-6 col-lg-4 mx-auto mt-5 text-light">
          <Form.Group className="mb-3 col-12 mx-auto" controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control className="mx-auto" type="email" placeholder="name@email.com" />
          </Form.Group>

          <Form.Group className="mb-3 col-12 mx-auto">
            <Form.Label htmlFor="name">First Name:</Form.Label>
            <Form.Control id="name" className="mx-auto" type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control id="message" as="textarea" rows={3} />
          </Form.Group>
          <Button variant="success" type="button">
            Send
          </Button>
        </Form>
      </Col>
      <Col md={12} className="text-center text-light mt-5 d-flex justify-content-center">
        <Nav.Link href="https://www.behance.net/" target="_blank">
          <FaBehanceSquare size={30} />
        </Nav.Link>

        <Nav.Link href="https://www.facebook.com/DigitalCircle1" target="_blank">
          <FaFacebookSquare size={30} />
        </Nav.Link>

        <Nav.Link href="https://github.com/KwaneleKhumalo" target="_blank">
          <FaGithubSquare size={30} />
        </Nav.Link>
      </Col>
      <Col className="text-light text-center mt-3">
        <p>{date}</p>
      </Col>
    </Row>
  )
}

export default Footer
