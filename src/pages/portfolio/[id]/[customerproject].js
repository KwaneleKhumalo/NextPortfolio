import Header from "@/components/Header"
import { useRouter } from "next/router"
import { Projects } from "@/assets/shared/Projects"
import { Row, Col } from "react-bootstrap"

const customer = () => {
  const router = useRouter()
  const { id, projectName, projectType, headerImg } = router.query
  const project = Projects.find(item => item.id === Number(id) && item.projectName === projectName)

  if (!project) {
    // Handle case when project is not found
    return <div>Project not found</div>
  }

  const { projectMedia } = project
  const headerText = `${projectName}`
  const subText = `${projectType}`
  const headerImage = `url(${projectMedia > '0' ? projectMedia[0].img : ""})`

  return (
    <>
      <div className="img-overlay"></div>
      <Header className="project-header" headerText={headerText} subText={subText} headerImg={headerImage} />

      <Row className="text-center">
        {projectMedia.length === 0 ? (
          <Col className="text-center">
            <h3>Images Coming Soon</h3>
          </Col>
        ) : (
          project.projectMedia.map(media => (
            <Col md={12} lg={6} key={media.mediaId} className="mx-auto p-0">
              <img src={media.img} alt={projectName} className="w-100 h-100 d-block" style={{ objectFit: "cover" }} />
            </Col>
          ))
        )}
      </Row>
    </>
  )
}

export default customer
