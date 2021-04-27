import React from "react"
import Contact from "../components/contact"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Contact />
    </Layout>
  )
}

export default ContactPage
