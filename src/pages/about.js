import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import About from "../components/about"

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <About />
    </Layout>
  )
}

export default AboutPage
