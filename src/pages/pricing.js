import {Container} from "react-bootstrap"
import { Prices } from "@/assets/shared/Prices"
import PriceList from "@/features/Pricing/PriceList"
import Header from "@/components/Header"

const PricingPage = () => {
  const headerText = `Let's build your next project!`
  const subText = `Maximize Your Business Communication.`

  return (
    <>
      <Header className="header" headerText={headerText} subText={ subText } />
      <PriceList />
    </>
  )
}

export default PricingPage
