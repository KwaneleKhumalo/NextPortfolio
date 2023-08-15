import { Card, Row } from "react-bootstrap"
import Link from "next/link"
import Loader from "@/components/Loader"
import { motion } from "framer-motion"


const ProjectItem = ({ project }) => {
  
  return (
    <motion.div className="row">
      {!project ? (
        <Loader />
      ) : (
        project.map(item => (
          <motion.div key={item.id} className={`card col-lg-6 col-md-12 mx-auto ${item.customerName} border-0 mb-1 shadow`} style={{ borderRadius: "0" }}>
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
