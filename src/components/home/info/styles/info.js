import styled from "styled-components/macro"

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`
export const GreyContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 5% 10%;
  background-color: ${props => props.theme.color.accent};
  @media (max-width: 600px) {
    width: 100%;
    min-height: 650px;
  }
`
export const GreenContainer = styled(GreyContainer)`
  background-color: ${props => props.theme.color.primary};
  align-items: normal;
`

export const GreenContext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
export const GreenTitle = styled.h3`
  ${props => props.theme.text.h3}
  color: ${props => props.theme.color.white};
`
export const GreenBody = styled.p`
  ${props => props.theme.text.body}
  color: ${props => props.theme.color.white};
`
export const GreenList = styled.ul`
  ${props => props.theme.text.body}
  color: ${props => props.theme.color.white};
`
export const GreenItem = styled.li`
  ${props => props.theme.text.body}
  color: ${props => props.theme.color.white};
  margin-top: 10px;
`
export const EcoEv = styled.span`
  ${props => props.theme.text.text}
  span:first-of-type {
    color: ${props => props.theme.color.primary};
  }
  span:last-of-type {
    color: ${props => props.theme.color.secondary};
  }
`
