import Footer from "./Footer"

const Layout = ({ children, scrollToFooter, scrollBtn }) => {
  return (
    <div>
      {scrollBtn && <scrollBtn onClick={scrollToFooter}>Scroll to Footer</scrollBtn>}

      {children}

      <Footer />
    </div>
  )
}

export default Layout
