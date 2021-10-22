import React from "react"
import Chargers from "../components/chargers"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"

const ChargersPage = () => {
  return (
    <Layout>
      <Seo title="Chargers" />
      <Chargers />
    </Layout>
  )
}

export default ChargersPage
