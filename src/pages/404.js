import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Button from "../shared/button"
import NotFoundSVG from "../assets/svg/404"
import { Wrapper } from "../styles/404"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper>
      <h2>404: Not found</h2>
      <p>
        <strong>Oops...</strong> seems like something went wrong.
      </p>
      <NotFoundSVG />
      <Button>go back</Button>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
