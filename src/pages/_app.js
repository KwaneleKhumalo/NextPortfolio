import Layout from "@/components/Layout"
import "bootstrap/dist/css/bootstrap.css"
import 'react-icons'
import '@/styles/globals.css'
import "../styles/Portfolio.modules.css"
import "../styles/Home.module.css"
import { AnimatePresence } from "framer-motion"


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  )
}
