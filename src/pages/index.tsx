import React from "react"
import Head from "next/head"
import Link from "next/link"

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home</h1>
      <a href="https://www.linkedin.com/in/riley-hansen1/">
        Linkedin
      </a>
      <div>
        <Link href="/my-location">Location</Link>
      </div>
    </div>
  )
}

export default Home
