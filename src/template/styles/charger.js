import styled from "styled-components/macro"

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  min-height: 100vh;
  flex-direction: column;
`
export const Main = styled.article`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 3%;
  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
  }
`
export const ImageContainer = styled.div`
  width: 40%;
  min-width: 300px;
  & img {
    background-color: ${props => props.theme.color.white};
  }
  @media (max-width: 750px) {
    order: 1;
  }
`
export const Content = styled.article`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  max-width: 400px;
  @media (max-width: 750px) {
    order: 2;
  }
`
export const Header = styled.header`
  display: flex;
  width: 100%;
  padding: 0 5% 16px 5%;
  justify-content: space-around;
  flex-direction: row;
  ${props => props.theme.text.h3};
  color: ${props => props.theme.color.dark};
`

export const Title = styled.h2`
  ${props => props.theme.text.h2}
  color: ${props => props.theme.color.dark}
`
export const Price = styled.h2`
  ${props => props.theme.text.h2}
  color: ${props => props.theme.color.primary};
`

export const Body = styled.p`
  ${props => props.theme.text.body};
  padding-top: 16px;
  color: ${props => props.theme.color.text};
`
export const List = styled.ul`
  padding: 16px 0;
`
export const ListItem = styled.li`
  ${props => props.theme.text.body};
  padding-bottom: 8px;
  color: ${props => props.theme.color.text};
`
