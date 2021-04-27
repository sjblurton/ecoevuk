import React from "react"
import { graphql } from "gatsby"
import {
  Price,
  Header,
  Body,
  Content,
  ImageContainer,
  List,
  Main,
  Title,
  Wrapper,
  ListItem,
} from "./styles/charger"
import Layout from "../components/layout/layout"
import Img from "gatsby-image"
import { navigate } from "gatsby"
import { Button } from "../shared"
import SEO from "../components/layout/seo"

const Charger = ({ data }) => {
  const { productsJson: charger } = data
  const { imageSharp: image } = data
  return (
    <Layout>
      <SEO title={charger.title} />
      <Wrapper>
        <Header>
          <Title>{charger.title}</Title>
          <Price>{charger.price}</Price>
        </Header>
        <Main>
          <Content>
            {charger.body.map((item, index) => (
              <Body key={index}>{item}</Body>
            ))}
            <List>
              {charger.list.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>
            <div onClick={() => navigate(-1)}>
              <Button>go back</Button>
            </div>
          </Content>
          <ImageContainer>
            <Img fluid={image.fluid} />
          </ImageContainer>
        </Main>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $image: String!) {
    productsJson(slug: { eq: $slug }) {
      title
      price
      body
      list
    }
    imageSharp(fluid: { originalName: { eq: $image } }) {
      fluid(maxWidth: 750) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`

export default Charger
