import { Row, Col, Button } from 'react-bootstrap'
import Slide from "@/features/Home/Carousel"
import foxLogo from '/public/images/portfolio/FoxFit/fox_logo.png'
import homeGrownLogo from '/public/images/portfolio/HomeGrown/HomeGrown_Farming.png'
import melissaMockup from "/public/images/portfolio/Melissa/Melissa_Mockup.jpg"
import Header from '@/components/Header'
import Head from 'next/head'


const Home = () => {
  const headerText = `Full Scale Web & Graphic Design Solutions.`;
  const subText = `Maximize Your Visibility! Transform Your Brand.`

  return (
    <>
      <Head>
        <title>Digital Circle | Transform Your Brand</title>
        <meta name="description" content="Digital Circle Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header className="home-header" headerText={headerText} subText={subText} />

      <Row className="p-5 bg-light">
        <Col className="text-center">
          <h1>Tired of cutting corners?</h1>
          <p className="col-lg-4 col-md-8 col-12 mx-auto">We ensure that you are up-to-date on the latest trends and technologies and that your project are delivered successfully, timely and efficiently.</p>
          <Button variant="info" className="text-light">
            Book A Solution
          </Button>
        </Col>
      </Row>

      <Row>
        <Col md="12" className="home-fox p-5 d-flex justify-content-center mb-2">
          <img src={foxLogo.src} alt="foxLogo" className="w-25" />
        </Col>

        <Col md="6" className="d-flex justify-content-center homegrown">
          <img src={homeGrownLogo.src} alt="Homegrown Logo" className="w-75" />
        </Col>

        <Col md="6" className="d-flex justify-content-center mockup">
          <img src={melissaMockup.src} alt="Melissa Shields website mockup" className="w-100" />
        </Col>
      </Row>

      <Row className="mt-5">
        <Slide />
      </Row>
    </>
  )
}

export default Home

