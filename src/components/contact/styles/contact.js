import styled, { keyframes } from "styled-components/macro"

const nodding = keyframes`
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

const spinning = keyframes`
  0% {
    transform: rotateY(360deg);
  }
  100% {
    transform: rotateY(0deg);
  }
`
const clouds = keyframes`
  0% {
    opacity: 0;
    transform: translate(0%);
  }
  10%{
    opacity: 1;
  }
  90%{
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(100%);
  }
`

export const Wrapper = styled.section`
  padding-top: 80px;
  min-height: calc(100vh - 60px);
`
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 750px) {
    flex-direction: row;
  }
`
export const Image = styled.div`
  order: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  & svg {
    height: auto;
    width: 100%;
    & #Phone {
      transform-origin: center;
      transform-box: fill-box;
      animation: 20s ${spinning} linear infinite;
    }
    & #cloud-top {
      opacity: 0;
      animation: 60s ${clouds} linear infinite;
    }
    & #cloud-middle {
      opacity: 0;
      animation: 30s ${clouds} linear infinite;
      animation-delay: 5s;
    }
    & #cloud-bottom {
      opacity: 0;
      animation: 20s ${clouds} linear infinite;
      animation-delay: 10s;
    }
    & #head {
      transform-origin: center;
      transform-box: fill-box;
      animation: 4s ${nodding} linear infinite;
    }
  }
`
export const Content = styled.article`
  order: 1;
  padding: 24px;
  min-height: 300px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`
export const Title = styled.h2`
  ${props => props.theme.text.h2};
  color: ${props => props.theme.color.dark};
`
export const Subtitle = styled.h3`
  margin-top: 32px;
  ${props => props.theme.text.h3};
  color: ${props => props.theme.color.dark};
`
export const Body = styled.p`
  ${props => props.theme.text.body};
  color: ${props => props.theme.color.text};
  max-width: 400px;
`
export const Link = styled.a`
  ${props => props.theme.text.h3};
  color: ${props => props.theme.color.primary};
  text-transform: lowercase;
  & button {
    width: 250px;
  }
  & svg {
    width: 32px;
    height: 32px;
    margin-left: 32px;
  }
`
