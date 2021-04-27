import React from "react"
import { Card } from "../../../shared"
import { HomeContent } from "../../../data/content"
import {
  GreyContainer,
  Wrapper,
  GreenContainer,
  GreenTitle,
  GreenBody,
  GreenList,
  GreenItem,
  GreenContext,
} from "./styles/info"
import { useStaticQuery, graphql } from "gatsby"

const InfoSection = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "loev" }) {
        childImageSharp {
          fluid(maxWidth: 330) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <GreyContainer>
        <Card
          image={data.file.childImageSharp.fluid}
          title={HomeContent.info.card.title}
          body={HomeContent.info.card.body}
          button2="learn more"
          href="https://www.gov.uk/government/collections/government-grants-for-low-emission-vehicles"
        />
      </GreyContainer>
      <GreenContainer>
        <GreenContext>
          <GreenTitle>{HomeContent.info.green.title}</GreenTitle>
          <GreenBody>{HomeContent.info.green.body}</GreenBody>
          <GreenBody>{HomeContent.info.green.listTitle}</GreenBody>
          <GreenList>
            <GreenItem>{HomeContent.info.green.ul.one}</GreenItem>
            <GreenItem>{HomeContent.info.green.ul.two}</GreenItem>
            <GreenItem>{HomeContent.info.green.ul.three}</GreenItem>
            <GreenItem>{HomeContent.info.green.ul.four}</GreenItem>
          </GreenList>
        </GreenContext>
      </GreenContainer>
    </Wrapper>
  )
}

export default InfoSection
