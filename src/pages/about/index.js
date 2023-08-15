import { Row, Col, Container } from "react-bootstrap"
import TeamList from "@/features/About/TeamList"
import Header from "@/components/Header"
import { motion } from "framer-motion"
import { pageAnimation } from "@/animation"

const AboutPage = () => {
  const headerText = `About Us.`
  const subText = `Originally, Digital Circle was formed as a logo design creative agency. Through expansion, we became a full scale Graphic Design and Web Solutions Agency, providing scalable digital solutions for small to mid-size businesses. We are proudly Brand Managers! `
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      <Header className="header" headerText={headerText} subText={subText} />
      <Row className="p-5 bg-light">
        <Col className="text-center">
          <h1 className="text-center">Let's Shake on it!</h1>
          <p className="col col-md-8 col-lg-5 text-center mx-auto mt-3">Transform the way your business operates. We provide scalable services, affording more bandwidth to reach more customers, maximize your business visibility and help define and implement your brand's communication strategy.</p>
        </Col>
      </Row>

      <Container>
        <Row className="mx-auto">
          <Col className="text-center mb-5 mt-3" sm="12">
            <h1>Meet your Architects</h1>
          </Col>
          <TeamList />
        </Row>
      </Container>
    </motion.div>
  )
}

export default AboutPage
