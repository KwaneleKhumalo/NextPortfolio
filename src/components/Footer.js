import { Row, Col, Nav } from "react-bootstrap"
import { FaBehanceSquare, FaGithubSquare, FaFacebookSquare } from "react-icons/fa"
import ContactForm from "./ContactForm"
const Footer = () => {
  const date = `\u00A9 ${new Date().getFullYear()}`
  return (
    <Row className="bg-dark p-5" id="footer">
      <Col md="12" className="text-light text-center">
        <h3>Let's Get To Work!</h3>
      </Col>
      <Col>
        <ContactForm />
      </Col>
      <Col md={12} className="text-center text-light mt-5 d-flex justify-content-center">
        <Nav.Link href="https://www.behance.net/KwaneleKhumalo" target="_blank">
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
