import styled from "styled-components/macro"

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  overflow: hidden;
  background-color: ${props => props.theme.color.accent};
  @media (max-width: 500px) {
    flex-direction: column;
  }
`
export const Content = styled.article`
  width: 50%;
  padding: clamp(16px, 5%, 64px);
  @media (max-width: 500px) {
    order: 1;
    width: 100%;
  }
`

export const Title = styled.h2`
  width: 100%;
  padding-bottom: clamp(16px, 5%, 32px);
  max-width: 400px;
  ${props => props.theme.text.h2};
  color: ${props => props.theme.color.dark};
`
export const Body = styled.p`
  padding-bottom: clamp(16px, 5%, 32px);
  width: 100%;
  max-width: 400px;
  ${props => props.theme.text.body};
  color: ${props => props.theme.color.body};
`
export const Image = styled.div`
  width: 50%;
  padding: clamp(16px, 5%, 64px);
  & svg {
    width: 100%;
    height: auto;
  }
  @media (max-width: 500px) {
    order: 2;
    width: 75%;
    margin: 0 auto;
  }
`
export const ButtonContainer = styled.div`
  padding-bottom: clamp(16px, 5%, 32px);
  width: 100%;
  max-width: 400px;
  display: flex;
`
export const EcoEv = styled.span`
  ${props => props.theme.text.text}
  span:first-of-type {
    color: ${props => props.theme.color.primary};
  }
  span:last-of-type {
    color: ${props => props.theme.color.secondary};
  }
  small {
    color: ${props => props.theme.color.primary};
  }
`
