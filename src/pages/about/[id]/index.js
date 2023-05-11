import Header from "@/components/Header"

const index = () => {
    const headerText = `Under Construction`
    const subText = `Please come back another time!`
    return (
      <>
        <Header className="header" headerText={headerText} subText={subText} />
      </>
    )
}

export default index
