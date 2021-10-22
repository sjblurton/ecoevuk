import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import Button from "../shared/button"
import NotFoundSVG from "../assets/svg/404"
import { Wrapper } from "../styles/404"
import { navigate } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Wrapper>
      <h2>404: Not found</h2>
      <p>
        <strong>Oops...</strong> seems like something went wrong.
      </p>
      <NotFoundSVG />
      <div onClick={() => navigate(-1)}>
        <Button>go back</Button>
      </div>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
