import Header from "@/components/Header"
import { useRouter } from "next/router"
import { Projects } from "@/assets/shared/Projects"
import Loader from "@/components/Loader"
import { Row, Col } from "react-bootstrap"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { pageAnimation } from "@/animation"

const customer = () => {
  const router = useRouter()
  const { id, projectName, projectType } = router.query

  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getProjectData = async () => {
    setIsLoading(true);
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
    await delay(3000)
    const project = Projects.find(item => item.id === Number(id) && item.projectName === projectName)

    if (!project) {
      return <div>Project not found</div>
    }

    if (project.projectMedia) {
      setImages(project.projectMedia)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    getProjectData()
  },[router])

  const [img] = images

  const headerText = `${projectName}`
  const subText = `${img ? projectType : ""}`
  const headerImage = `url(${img ? img.img : ""})`

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
          <Col className="img-overlay w-100 position-absolute"></Col>
          <Header className="project-header" headerText={headerText} subText={subText} headerImg={headerImage} />
        </motion.div>
      )}
      <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <Row className="text-center">
          {images.length === 0 ? (
            <p className="text-center">Please Wait...</p>
          ) : (
            images.map(media => (
              <Col md={12} lg={6} key={media.mediaId} className="mx-auto p-0">
                <img src={media.img} alt={projectName} className="w-100 h-100 d-block" style={{ objectFit: "cover" }} />
              </Col>
            ))
          )}
        </Row>
      </motion.div>
    </>
  )
}

export default customer
