import PriceList from "@/features/Pricing/PriceList"
import Header from "@/components/Header"
import { motion } from "framer-motion"
import { pageAnimation } from "@/animation"

const PricingPage = () => {
  const headerText = `Let's build your next project!`
  const subText = `Maximize Your Business Communication.`

  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Header className="header" headerText={headerText} subText={subText} />
      <PriceList />
    </motion.div>
  )
}

export default PricingPage
