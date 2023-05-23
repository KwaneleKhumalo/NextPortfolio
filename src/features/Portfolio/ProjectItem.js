import { Nav, Card } from "react-bootstrap"
import Link from "next/link"

const ProjectItem = ({ project }) => {
  const { id, projectName, headerImg, customerName } = project
  return (
    <>
      <Card key={id} className={`col-lg-6 col-md-12 mx-auto ${customerName} border-0 mb-1`} style={{ borderRadius: "0" }}>
        <Link
          href={{
            pathname: `/portfolio/${id}/${projectName}`,
            query: project
          }}>
          <Card.Img src={headerImg} />
        </Link>
      </Card>
    </>
  )
}

export default ProjectItem
