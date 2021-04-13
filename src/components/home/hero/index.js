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
import { Link } from "gatsby"

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
          </HeroEcoEv>
          <HeroTitle>
            Ditch The Diesel, fuel at home, or work place with cleaner, and
            cheaper electricity!
          </HeroTitle>
          <HeroButtons>
            <Button>get a quote</Button>
            <Button variant="outline">learn more</Button>
          </HeroButtons>
          <HeroSubTitle>
            <span>ECO</span>
            <span>EV</span>
            UK are OLEV approved and certified to install EV home, and business
            chargers. Based in the local area.
          </HeroSubTitle>
          <HeroSmallText>
            There's a OLEV GRANT for homeowners of up to £350 for installation
            if you qualify
          </HeroSmallText>
        </HeroContent>
      </HeroSection>
    </HeroContainer>
  )
}

export default Hero
