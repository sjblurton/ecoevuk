import React from "react"
import { Hero } from "../components/home"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
  </Layout>
)

export default HomePage
