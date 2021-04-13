import styled from "styled-components/macro"

export const Wrapper = styled.footer`
  background-color: ${props => props.theme.color.light};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0px;
  width: 100%;
  height: 60px;
  z-index: 999;
  @media (max-width: 750px) {
    padding: 0px;
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 30%;
  max-width: 230px;
  &:nth-of-type(2) {
    @media (max-width: 750px) {
      display: none;
    }
  }
  &:nth-of-type(3) {
    @media (max-width: 750px) {
      width: 95%;
    }
  }
`
export const CopyrightContainer = styled(TextContainer)`
  width: 120px;
  @media (max-width: 750px) {
    display: none;
  }
`

export const SmallText = styled.p`
  ${props => props.theme.text.small};
  color: ${props => props.theme.color.subtle};
  text-transform: capitalize;
`
export const ImportantText = styled.a`
  ${props => props.theme.text.body};
  color: ${props => props.theme.color.primary};
  text-transform: lowercase;
`
