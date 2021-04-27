import styled from "styled-components/macro"
import { keyframes } from "styled-components"

const peep1 = keyframes`
 0% { transform: translate(0px, 0px)}
 100% { transform: translate( 20px, 0px) }
`
const peep2 = keyframes`
 0% { transform: translate(0px, 0px)}
 100% { transform: translate( 0px, 20px) }
`

export const Wrapper = styled.div`
  padding: 68px 5% 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 87vh;
  min-height: calc(100vh - 60px);

  & h2 {
    ${props => props.theme.text.h2};
    color: ${props => props.theme.color.dark};
  }
  & p {
    ${props => props.theme.text.body}
  }
  & strong {
    ${props => props.theme.text.bold}
    color: ${props => props.theme.color.primary}
  }
  & svg {
    width: 100%;
    padding: 5%;
    & #peep1,
    #peep2 {
      animation-duration: 4s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
    & #peep1 {
      animation-name: ${peep1};
    }
    & #peep2 {
      animation-name: ${peep2};
    }
  }
  div:last-child {
    margin-bottom: 8px;
  }
`
