import React from "react"
import {
  AvatarWrapper,
  Body,
  Image,
  Info,
  InfoBody,
  InfoCard,
  InfoTitle,
  Main,
  MainBody,
  MainContent,
  MainTitle,
  SVGContainer,
  Text,
  Title,
  Wrapper,
} from "./styles/about"
import AboutSVG from "../../assets/svg/aboutSVG"
import { AboutContent } from "../../data/content"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <Wrapper>
      <Main>
        <SVGContainer>
          <AboutSVG />
        </SVGContainer>
        <MainContent>
          <MainTitle>About Us</MainTitle>
          <MainBody
            dangerouslySetInnerHTML={{ __html: AboutContent.main.p1 }}
          ></MainBody>
          <MainBody>{AboutContent.main.p2}</MainBody>
          <MainBody
            dangerouslySetInnerHTML={{ __html: AboutContent.main.p3 }}
          ></MainBody>
          <MainBody
            dangerouslySetInnerHTML={{ __html: AboutContent.main.p4 }}
          ></MainBody>
        </MainContent>
      </Main>
      <Info>
        <InfoCard>
          <AvatarWrapper>
            <Image>
              <StaticImage
                src="../../assets/images/paul.png"
                alt="Joe Blogs avatar"
                placeholder="blurred"
                layout="fullWidth"
              />
            </Image>
            <Body>
              <Title>Joe Blogs</Title>
              <Text
                dangerouslySetInnerHTML={{
                  __html: AboutContent.avatar.paul.body,
                }}
              />
            </Body>
          </AvatarWrapper>
        </InfoCard>
        <InfoCard>
          <InfoTitle>{AboutContent.green.title}</InfoTitle>
          <InfoBody>{AboutContent.green.body}</InfoBody>
        </InfoCard>
      </Info>
    </Wrapper>
  )
}

export default About
