import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children}) => {
  return (
    <div>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
