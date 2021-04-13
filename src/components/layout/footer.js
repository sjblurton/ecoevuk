import React from "react"
import {
  CopyrightContainer,
  ImportantText,
  SmallText,
  TextContainer,
  Wrapper,
} from "./styles/footer"

const Footer = () => {
  return (
    <Wrapper>
      <CopyrightContainer>
        <SmallText>&copy; copyright {new Date().getFullYear()}</SmallText>
      </CopyrightContainer>
      <TextContainer>
        <SmallText>email: </SmallText>
        <ImportantText
          href={`mailto:Joe@Company.co.uk?subject=MESSAGE FROM YOUR WEBSITE`}
        >
          Joe@Company.co.uk
        </ImportantText>
      </TextContainer>
      <TextContainer>
        <SmallText>Phone: </SmallText>
        <ImportantText href={`tel:+44 1234 123456`}>
          +44 1234 123456
        </ImportantText>
      </TextContainer>
    </Wrapper>
  )
}

export default Footer
