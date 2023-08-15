import Header from "@/components/Header"
import PortfolioList from "@/features/Portfolio/PortfolioList"
import background from "../../assets/images/header/digital_Circle_logo.png"
import { motion } from "framer-motion"
import { pageAnimation } from "@/animation"

const portfolioPage = () => {
  const headerText = `Portfolio`
  const subText = `Digital Circle provides full scale Graphic and Web Design Solutions to businesses of various sizes. Find some of the brands we've worked with and we'd love to add your brand to the list.`
  const headerImg = `url(${background})`
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit" className="text-center">
      <Header className="header" headerImg={headerImg} headerText={headerText} subText={subText} />
      <PortfolioList />
    </motion.div>
  )
}

export default portfolioPage
