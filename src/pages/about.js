import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import About from "../components/about"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <About />
    </Layout>
  )
}

export default AboutPage
