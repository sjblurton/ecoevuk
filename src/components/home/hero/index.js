import React from "react"
import {
  HeroSection,
  HeroTitle,
  HeroContent,
  HeroImage,
  HeroContainer,
  HeroEcoEv,
  HeroSubTitle,
  HeroButtons,
  HeroSmallText,
} from "./styles/hero"
import HeroSVG from "../../../assets/svg/car"
import { Button } from "../../../shared"
import { HomeContent, BUTTON_VARIANTS, ROUTS } from "../../../data/content"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroSection>
        <HeroImage>
          <HeroSVG />
        </HeroImage>
        <HeroContent>
          <HeroEcoEv>
            <span>ECO</span>
            <span>EV</span>
            <small>UK</small>
          </HeroEcoEv>
          <HeroTitle>{HomeContent.hero.title}</HeroTitle>
          <HeroButtons>
            <Button to={ROUTS.CONTACT}>get a quote</Button>
            <Button to="#installation" variant={BUTTON_VARIANTS.OUTLINE}>
              learn more
            </Button>
          </HeroButtons>
          <HeroSubTitle>
            <span>ECO</span>
            <span>EV</span>
            <small>UK </small>
            {HomeContent.hero.subTitle}
          </HeroSubTitle>
          <HeroSmallText>{HomeContent.hero.smallText}</HeroSmallText>
        </HeroContent>
      </HeroSection>
    </HeroContainer>
  )
}

export default Hero
