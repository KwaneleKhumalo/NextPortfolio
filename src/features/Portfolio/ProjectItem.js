import { Card, Row } from "react-bootstrap"
import Link from "next/link"
import Loader from "@/components/Loader"
import { motion } from "framer-motion"


const ProjectItem = ({ project }) => {
  
  return (
    <motion.div className="row p-0">
      {!project ? (
        <Loader />
      ) : (
        project.map(item => (
          <motion.div key={item.id} className={`p-0 col-lg-6 border-0 col-md-12 mx-auto ${item.customerName} mb-1 shadow`} style={{ borderRadius: "0" }}>
            <Card.Img src={item.headerImg} />
            <Link
              className="btn btn-info mx-auto col-6 col-md-3 mb-3"
              href={{
                pathname: `/portfolio/${item.id}/${item.projectName}`,
                query: item
              }}>
              View More
            </Link>
          </motion.div>
        ))
      )}
    </motion.div>
  )
}

export default ProjectItem
