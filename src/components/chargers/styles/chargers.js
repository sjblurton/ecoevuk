import styled from "styled-components/macro"

export const Wrapper = styled.section`
  padding-top: 80px;
  min-height: 100vh;
`
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
`
export const Title = styled.h2`
  padding-bottom: 16px;
  width: 100%;
  text-align: center;
  ${props => props.theme.text.h2};
  color: ${props => props.theme.color.dark};
`
export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 24px;
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
    & h2 {
      color: ${props => props.theme.color.dark};
    }
    & p {
      color: ${props => props.theme.color.text};
    }
    @media (max-width: 700px) {
      order: 2;
    }
  }
`
export const InfoTitle = styled.h2`
  ${props => props.theme.text.h3}
  color: ${props => props.theme.color.white};
  padding-bottom: 20px;
  max-width: 400px;
`
export const InfoBody = styled.p`
  ${props => props.theme.text.body}
  color: ${props => props.theme.color.white};
  max-width: 400px;
`
