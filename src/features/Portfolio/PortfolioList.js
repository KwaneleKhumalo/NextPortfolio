import { Row } from "react-bootstrap"
import { Projects } from "@/assets/shared/Projects"
import ProjectItem from "./ProjectItem"
import { useEffect, useState } from "react"
import Loader from "@/components/Loader"

const PortfolioList = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  
  const getProjectData = async () => {
    setIsLoading(true)
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
    await delay(2000)
    const projectData = Projects
    setData(projectData)

    setIsLoading(false)
  }

  useEffect(() => {
    getProjectData()
  }, [])

  return (
    <Row className="text-center">
      { isLoading ? <Loader /> : ""}
      <ProjectItem project={data} />
    </Row>
  )
}

export default PortfolioList
