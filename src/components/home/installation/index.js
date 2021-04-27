import React from "react"
import {
  Body,
  Image,
  Title,
  Wrapper,
  ButtonContainer,
  EcoEv,
} from "./styles/installation"
import { Button } from "../../../shared"
import { ROUTS, HomeContent } from "../../../data/content"
import { StaticImage } from "gatsby-plugin-image"

const Installation = () => {
  return (
    <Wrapper id="installation">
      <Title>installation costs</Title>
      <Body>{HomeContent.Installation.p1}</Body>
      <Body>{HomeContent.Installation.p2}</Body>
      <Body>{HomeContent.Installation.p3}</Body>
      <Body>
        <EcoEv>
          <span>ECO</span>
          <span>EV</span>
        </EcoEv>
        {HomeContent.Installation.p4}
      </Body>
      <Image>
        <StaticImage
          src="../../../assets/images/ev-being-charged-front.jpg"
          alt="EV being charged from the front"
          placeholder="blurred"
          layout="fullWidth"
        />
        <div />
      </Image>

      <ButtonContainer>
        <Button to={ROUTS.CONTACT}>get a quote</Button>
      </ButtonContainer>
    </Wrapper>
  )
}

export default Installation
