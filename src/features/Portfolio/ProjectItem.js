import { Card } from "react-bootstrap"
import Link from "next/link"

const ProjectItem = ({ project }) => {
  
  return (
    <>
      {project.map(item => (
        <Card key={item.id} className={`col-lg-6 col-md-12 mx-auto ${item.customerName} border-0 mb-1 shadow`} style={{ borderRadius: "0" }}>
          <Card.Img src={item.headerImg} />

          <Link className="btn btn-info mx-auto col-6 col-md-3 mb-3"
            href={{
              pathname: `/portfolio/${item.id}/${item.projectName}`,
              query: item
            }}>Learn More</Link>
        </Card>
      ))}
    </>
  )
}

export default ProjectItem
