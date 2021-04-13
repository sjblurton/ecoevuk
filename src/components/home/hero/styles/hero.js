import styled, { keyframes } from "styled-components/macro"

const loading = keyframes`
  0% {
    transform: translateX(100%);
  }
  90%{
    transform: translateX(-0.5%);

  }
  100% {
    transform: translateX(0);
  }
`
const spinning = keyframes`
  0% {
    transform: rotateZ(360deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
`

const bouncing = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-1%);
  }
`
const scaling = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.01);
  }
`

export const HeroContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
`
export const HeroSection = styled.section`
  width: 90%;
  max-width: 1150px;
  max-height: 600px;
  min-height: 450px;
  margin: 0 auto;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const HeroImage = styled.div`
  overflow-x: visible;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  order: 2;
  animation: 4s ${loading} ease;
  animation-fill-mode: forwards;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  @media (min-width: 750px) {
    left: 30%;
  }
  @media (max-width: 750px) {
    opacity: 0.7;
  }
  & svg {
    overflow: visible;
    width: 100%;

    & #car__rear-wheel,
    #car__front-wheel {
      transform-origin: center;
      transform-box: fill-box;
      animation: 2s ${spinning} linear infinite;
    }
    & #car__body {
      transform-origin: center;
      transform-box: fill-box;
      animation: 2s ${bouncing} ease-in-out infinite alternate;
    }
    & #car__ground {
      transform-origin: center;
      transform-box: fill-box;
      animation: 2s ${scaling} ease-in-out infinite alternate;
    }
    & #car__man {
      transform-origin: center;
      transform-box: fill-box;
      animation: 2s ${bouncing} ease-in-out infinite alternate;
    }
  }
`

export const HeroContent = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  order: 1;
  z-index: 2;
  @media (max-width: 750px) {
    width: 60%;
  }
  @media (max-width: 650px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`
export const HeroEcoEv = styled.h1`
  ${props => props.theme.text.h2}
  span:first-of-type {
    color: ${props => props.theme.color.primary};
  }
  span:last-of-type {
    color: ${props => props.theme.color.secondary};
  }
`
export const HeroTitle = styled.h2`
  ${props => props.theme.text.h3}
  color: ${props => props.theme.color.dark};
`
export const HeroSubTitle = styled.h3`
  span:first-of-type {
    color: ${props => props.theme.color.primary};
  }
  span:last-of-type {
    color: ${props => props.theme.color.secondary};
  }

  ${props => props.theme.text.small}
  color: ${props => props.theme.color.body};
  width: 85%;
  @media (max-width: 750px) {
    width: 100%;
  }
`
export const HeroButtons = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 250px;
  max-width: 275px;
  width: 50%;
  justify-content: space-between;
  margin: 32px 0;
  @media (min-width: 750px) {
    margin: 0;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    height: 95px;
  }
`
export const HeroSmallText = styled.p`
  ${props => props.theme.text.small}
  color: ${props => props.theme.color.subtle};
`
