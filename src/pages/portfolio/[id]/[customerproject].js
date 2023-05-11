import Header from "@/components/Header"
import { useRouter } from "next/router"
import { Row, Col } from "react-bootstrap"

const customer = () => {
  const router = useRouter()
  const data = router.query 
  // console.log(data)
  const headerText = `${data.projectName}`
  const subText = `${data.projectType}`
  return (
    <>
      <Header className="header" headerText={headerText} subText={subText} />
    </>
  )
}

export default customer
