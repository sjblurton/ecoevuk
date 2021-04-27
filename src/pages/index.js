import React from "react"
import { Finance, Hero, Info, Installation } from "../components/home"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Info />
    <Installation />
    <Finance />
  </Layout>
)

export default HomePage
