import { Row, Card, Container, Button, Figure } from "react-bootstrap"
import { Projects } from "@/assets/shared/Projects"
import ProjectItem from "./ProjectItem"

const PortfolioList = () => {
  return (
    <Row className="text-center">
      <ProjectItem project={Projects} />
    </Row>
  )
}

export default PortfolioList
