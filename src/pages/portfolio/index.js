import Header from "@/components/Header"
import PortfolioList from "@/features/Portfolio/PortfolioList"
import background from "../../assets/images/header/digital_Circle_logo.png"

const portfolioPage = () => {
  const headerText = `Portfolio`
  const subText = `Digital Circle provides full scale Graphic and Web Design Solutions to businesses of various sizes. Find some of the brands we've worked with and we'd love to add your brand to the list.`
  const headerImg = `url(${background})`
  return (
    <div className="text-center">
      <Header className="header" headerImg={headerImg} headerText={headerText} subText={subText} />
      <PortfolioList />
    </div>
  )
}

export default portfolioPage
