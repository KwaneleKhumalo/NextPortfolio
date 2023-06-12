import { Row, Col, Button, Card, Container } from "react-bootstrap"
import TeamList from "@/features/About/TeamList"
import Header from "@/components/Header"

const AboutPage = () => {
  const headerText = `About Us.`
  const subText = `Originally, Digital Circle was formed as a logo design creative agency. Through expansion, we became a full scale Graphic Design and Web Solutions Agency, providing scalable digital solutions for small to mid-size businesses. We are proudly Brand Managers! `
  return (
    <>
      <Header className="header" headerText={headerText} subText={subText} />
      <Row className="p-5 bg-light">
        <Col className="text-center">
          <h1 className="text-center">Let's Shake on it!</h1>
          <p className="col col-md-8 col-lg-5 text-center mx-auto mt-3">Transform the way your business operates. The services offered are scalable, allowing you to reach more customers, maximize your brand visibility and help define and implement your brand's communication strategy.</p>
          <Button variant="info" className="mx-auto text-light mt-3">
            Book A Solution
          </Button>
        </Col>
      </Row>

      <Container>
        <Row className="p-5 mx-auto">
          <Col className="text-center mb-5" sm="12">
            <h1>Meet your Architects</h1>
          </Col>
          <TeamList />
        </Row>
      </Container>
    </>
  )
}

export default AboutPage
