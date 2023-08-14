import NavMenu from "@/components/Navbar"
import {Col, Row, Container } from "react-bootstrap"
import Link from "next/link"
import TechStack from "./TechStack"

const TeamPage = ({ data }) => {
  const { Name, Position, Description, Media, tech, links } = data

  return (
    <>
      <NavMenu />
      <Row className="description bg-dark sticky-top text-light" style={{ paddingBottom: "5rem" }}>
        <Container className="px-5">
          <Row className="title align-items-center mx-auto border-bottom border-info">
            <Col md={12} lg={6} className="hide text-center order-2 order-lg-1">
              <h2>{Name}</h2>
              <h2 className="mt-3 text-info">{Position}</h2>
              <p className="col-12 col-md-8 col-xl-5 mx-auto mt-3">{Description}</p>
              <Link href="/portfolio" className="btn btn-outline-info col-xl-2 col-lg-4 col-md-4 col-6 mb-5">
                Our Work
              </Link>
            </Col>
            <Col md={12} lg={6} className="about-image py-5 text-center order-sm-1 order-lg-2">
              <img className="shadow shadow-lg rounded-5" src={Media} alt={Name} style={{ width: "50%" }} />
            </Col>
          </Row>
        </Container>
        <TechStack data={tech} links={links} name={Name} />
      </Row>
    </>
  )
}

export default TeamPage
