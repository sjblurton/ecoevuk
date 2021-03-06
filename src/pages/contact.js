import React from "react"
import Contact from "../components/contact"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <Contact />
    </Layout>
  )
}

export default ContactPage
