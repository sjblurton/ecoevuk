import React from "react"
import {
  Body,
  ButtonContainer,
  Content,
  EcoEv,
  Image,
  Title,
  Wrapper,
} from "./styles/finance"
import CalculatorSVG from "../../../assets/svg/calculator"
import { HomeContent } from "../../../data/content"
import { Button } from "../../../shared"

const Finance = () => {
  return (
    <Wrapper>
      <Image>
        <CalculatorSVG />
      </Image>
      <Content>
        <Title>Finance</Title>
        <Body>
          <EcoEv>
            <span>ECO</span>
            <span>EV</span>
            <small>UK</small>
          </EcoEv>
          {HomeContent.finance.p1}
        </Body>
        <Body>{HomeContent.finance.p2}</Body>
        <ButtonContainer>
          <a
            href="https://apply.kandoo.co.uk/?clickref=925514"
            target="_blank"
            rel="noreferrer"
          >
            <Button>Kandoo</Button>
          </a>
        </ButtonContainer>
      </Content>
    </Wrapper>
  )
}

export default Finance
