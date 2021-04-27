import React from "react"
import Chargers from "../components/chargers"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

const ChargersPage = () => {
  return (
    <Layout>
      <SEO title="Chargers" />
      <Chargers />
    </Layout>
  )
}

export default ChargersPage
