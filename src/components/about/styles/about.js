import styled, { keyframes } from "styled-components/macro"

const spinning = keyframes`
  0% {
    transform: rotateZ(360deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
`
const wobble = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  25%{
    transform: rotateZ(5deg);

  }
  75%{
    transform: rotateZ(-5deg);

  }
  100% {
    transform: rotateZ(0deg);
  }
`

export const Wrapper = styled.section`
  padding-top: 80px;
  min-height: 100vh;
`
export const Main = styled.main`
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  justify-content: space-around;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`
export const SVGContainer = styled.div`
  @media (max-width: 750px) {
    order: 2;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  & svg {
    height: auto;
    width: 100%;
    & #turbine-left,
    & #turbine-right,
    & #turbine-center {
      transform-origin: center;
      transform-box: fill-box;
      animation: 12s ${spinning} linear infinite;
    }
    & #turbine-center {
      animation: 15s ${spinning} linear infinite;
    }
    & #hair {
      transform-origin: center;
      transform-box: fill-box;
      animation: 11s ${wobble} linear infinite;
    }
  }
`
export const MainContent = styled.article`
  @media (max-width: 750px) {
    margin: 0 auto;
  }

  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 400px;
  justify-content: space-evenly;
`
export const MainTitle = styled.h2`
  ${props => props.theme.text.h2};
  color: ${props => props.theme.color.dark};
  padding-bottom: 16px;
`
export const MainBody = styled.p`
  ${props => props.theme.text.body};
  color: ${props => props.theme.color.text};
  padding-bottom: 8px;
  max-width: 400px;
`
export const Info = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`
export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 5%;
  width: 50%;
  @media (max-width: 700px) {
    width: 100%;
  }

  background: ${props => props.theme.color.primary};
  &:first-of-type {
    background-color: ${props => props.theme.color.accent};
    @media (max-width: 700px) {
      order: 2;
    }
  }
`
export const InfoTitle = styled.h2`
  ${props => props.theme.text.h3}
  color: ${props => props.theme.color.white};
  padding-bottom: 20px;
`
export const InfoBody = styled.p`
  ${props => props.theme.text.body}
  color: ${props => props.theme.color.white};
  max-width: 400px;
`
export const AvatarWrapper = styled.div`
  position: relative;
  width: 240px;
  height: 230px;
`
export const Image = styled.div`
  position: absolute;
  top: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  right: 50%;
  transform: translateX(50%);
  z-index: 1;
  & img {
    width: 100%;
    border-radius: 50%;
  }
`
export const Body = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 160px;
  background-color: ${props => props.theme.color.white};
  border-radius: 100px 100px 0 0;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 5%;
`

export const Title = styled.h4`
  ${props => props.theme.text.bold};
  color: ${props => props.theme.color.dark};
  text-align: center;
  padding-bottom: 5%;
`
export const Text = styled.p`
  ${props => props.theme.text.body};
  color: ${props => props.theme.color.text};
`
