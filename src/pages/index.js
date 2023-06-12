import { Row, Col, Button } from 'react-bootstrap'
import Slide from "@/features/Home/Carousel"
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
          <img src="https://thumbnails-photos.amazon.com/v1/thumbnail/_3Ye5IoaRcusuT0t9f0MPw?ownerId=A1YK1TL6G91V5W&viewBox=1320%2C700&groupShareToken=4CO315f0T4mHyxv53gPSQg.BNe5o4LwW203vgtobg2ERq" alt="foxLogo" className="w-25" />
        </Col>

        <Col md="6" className="d-flex justify-content-center shadow">
          <img src="https://thumbnails-photos.amazon.com/v1/thumbnail/0gcamSwDQG-oWFtteziGnw?viewBox=1001%2C1001&ownerId=A1YK1TL6G91V5W&groupShareToken=T1STA1W7S8aIT8jQMwXOBg.OWVb-u0HuLFza4TeTXsdxE" alt="Double H Logo" className="w-100" />
        </Col>

        <Col md="6" className="d-flex justify-content-center mockup shadow">
          <img src="https://thumbnails-photos.amazon.com/v1/thumbnail/yiAcLOPdQaqeDbACKOxZvw?viewBox=1500%2C1000&ownerId=A1YK1TL6G91V5W&groupShareToken=SqcpfxMaRLynB-gYA9BzHg.EKCyund9WdpCMv84py4hOC" alt="Melissa Shields website mockup" className="w-100" />
        </Col>
      </Row>

      <Row className="mt-5">
        <Slide />
      </Row>
    </>
  )
}

export default Home

