import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
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
