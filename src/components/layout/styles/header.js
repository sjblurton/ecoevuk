import styled from "styled-components/macro"
import { Link } from "gatsby"

export const Wrapper = styled.header`
  position: fixed;
  background-color: ${props => props.theme.color.light};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 60px;
  width: 100vw;
  height: 60px;
  z-index: 999;
`
export const Content = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Logo = styled.div`
  width: 100px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: 1px dotted ${props => props.theme.color.primary};
  }
`
export const List = styled.ul`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: space-evenly;
  @media (max-width: 750px) {
    display: none;
  }
`
export const ButtonUnderline = styled.div`
  position: absolute;
  height: 2px;
  left: 0;
  right: 0;
  bottom: 5px;
  border-radius: 5px;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 350ms ease;
  background-color: ${props => props.theme.color.primary};
`

export const LinkWrapper = styled.div`
  position: relative;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  &:hover ${ButtonUnderline} {
    transform: scale(1);
    transform-origin: left;
  }
`

export const StyledLink = styled(Link)`
  text-transform: uppercase;
  color: ${props => props.theme.color.primary};
  font-weight: bold;
`

export const Burger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 32px;
  cursor: pointer;
  & svg path {
    stroke: ${props => props.theme.color.primary};
  }
  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: 1px dotted ${props => props.theme.color.primary};
  }

  @media (min-width: 750px) {
    display: none;
  }
`
