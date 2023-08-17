import { Row, Col, Container } from "react-bootstrap"
import TeamList from "@/features/About/TeamList"
import Header from "@/components/Header"
import { motion } from "framer-motion"
import { pageAnimation } from "@/animation"

const AboutPage = () => {
  const headerText = `About Us.`
  const subText = `Founded in the Beautiful Bitterroot Valley as a logo design creative agency, Digital Circle later expanded to become a full scale Graphic Design and Web Solutions Agency, providing scalable digital solutions for small to mid-size businesses. We are proudly Brand Managers!`
  return (
    <>
      <motion.div variants={pageAnimation} initial="hidden" animate="show">
        <Header className="home-header" headerText={headerText} subText={subText} />
        <Row className="p-5 bg-light">
          <Col className="text-center">
            <h1 style={styles.textDecor} className="mb-5">Meet your Architects</h1>
            <p style={styles.text} className="col col-md-8 text-center mx-auto mt-3">
              We are <span className="text-info">Brand Managers!</span> What this means is that we stand behind your brand, allowing you to run your operations with no concern of the look, feel and <span className="text-info">communication strategy</span> of your brand. Meet the faces behind your brand. We're looking forward to working with you!
            </p>
          </Col>
        </Row>

        <Container>
          <Row className="mx-auto">
            <TeamList />
          </Row>
        </Container>
      </motion.div>
    </>
  )
}

const styles = {
  textDecor: {
    textDecorationLine: "underline",
    textDecorationColor: "#5bc0de",
    textUnderlineOffset: "10px"
  },
  text: {
    fontSize: "1.5em"
  }
}


export default AboutPage
