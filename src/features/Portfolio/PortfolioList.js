import { Row, Card, Container, Button, Figure } from "react-bootstrap"
import { Projects } from "@/assets/shared/Projects"
import ProjectItem from "./ProjectItem"

const PortfolioList = () => {
  return (
    <Row className="text-center">
      {Projects.map(project => (
        <ProjectItem project={project}/>
      ))}
    </Row>
  )
}

export default PortfolioList
