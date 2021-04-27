import React from "react"
import { Card } from "../../shared"
import { ChargersInfo } from "../../data/content"
import {
  Info,
  InfoTitle,
  InfoBody,
  InfoCard,
  Grid,
  Main,
  Title,
  Wrapper,
} from "./styles/chargers"
import { useStaticQuery, graphql } from "gatsby"

const Chargers = () => {
  const data = useStaticQuery(graphql`
    {
      allProductsJson {
        edges {
          node {
            slug
            title
            price
            cardBody
          }
        }
      }
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 350) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  `)
  const { allProductsJson: chargers } = data
  const { allImageSharp: images } = data
  chargers.edges[0].node.image = images.edges[2].node
  chargers.edges[1].node.image = images.edges[4].node
  chargers.edges[2].node.image = images.edges[0].node
  chargers.edges[3].node.image = images.edges[3].node
  return (
    <Wrapper>
      <Main>
        <Title>chargers</Title>
        <Grid>
          {chargers.edges.map((charger, index) => {
            return (
              <Card
                key={index}
                image={charger.node.image.fluid}
                title={charger.node.title}
                body={charger.node.cardBody}
                price={charger.node.price}
                to={charger.node.slug}
                button1="learn more"
              />
            )
          })}
        </Grid>
      </Main>

      <Info>
        {ChargersInfo.map((charger, index) => (
          <InfoCard key={index}>
            <InfoTitle>{charger.title}</InfoTitle>
            <InfoBody>{charger.body}</InfoBody>
          </InfoCard>
        ))}
      </Info>
    </Wrapper>
  )
}

export default Chargers
