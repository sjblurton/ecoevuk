import React from "react"
import { Card } from "../../../shared"
import { HomeContent, loevImg } from "../../../data/content"
import {
  GreyContainer,
  Wrapper,
  GreenContainer,
  GreenTitle,
  GreenBody,
  GreenList,
  GreenItem,
  GreenContext,
  EcoEv,
} from "./styles/info"

const InfoSection = () => {
  return (
    <Wrapper>
      <GreyContainer>
        <Card
          image={loevImg}
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
