import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        {/* Add any meta tags, title, or stylesheets for the entire app */}
        <title>My Next.js App</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
