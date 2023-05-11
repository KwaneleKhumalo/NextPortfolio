
import Header from "./Header"
import Footer from "./Footer"
import SideNav from "./sideNav"

const Layout = ({children}) => {
  return (
    <div>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
