import Header from "@/components/Header"
import { useRouter } from "next/router"
import { Row, Col } from "react-bootstrap"

const customer = () => {
  const router = useRouter()
  const data = router.query
  const headerText = `${data.projectName}`
  const subText = `${data.projectType}`
  const headerImg = `url(${data.headerImg})`

  return (
    <>
      <div className="img-overlay"></div>
      <Header className="project-header" headerText={headerText} subText={subText} headerImg={headerImg} />
    </>
  )
}

export default customer
