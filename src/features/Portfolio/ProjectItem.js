import { Nav, Card } from "react-bootstrap"
import Link from "next/link"
import { useEffect } from "react";

const ProjectItem = ({ project }) => {
  return (
    <>
      {project.map(item => (
        <Card key={item.id} className={`col-lg-6 col-md-12 mx-auto ${item.customerName} border-0 mb-1`} style={{ borderRadius: "0" }}>
          <Link
            href={{
              pathname: `/portfolio/${item.id}/${item.projectName}`,
              query: item
            }}>
            <Card.Img src={item.headerImg} />
          </Link>
        </Card>
      ))}
    </>
  )
}

export default ProjectItem
