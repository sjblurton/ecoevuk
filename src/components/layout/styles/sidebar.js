import styled from "styled-components/macro"
import { Link } from "gatsby"

export const Wrapper = styled.nav`
  position: fixed;
  background-color: ${props => props.theme.color.light};
  display: ${props => (props.sidebarOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 60px;
  z-index: 1000;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
`
export const ListItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 64px;
  margin-top: 24px;
  cursor: pointer;
  &:first-child {
    margin-top: 0;
  }
`
export const Logo = styled.div`
  cursor: pointer;
  padding: 24px 64px;

  & svg {
    width: 100px;
    height: 100%;
  }

  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: 1px dotted ${props => props.theme.color.primary};
  }
`
export const CloseIcon = styled.div`
  position: absolute;
  right: 32px;
  top: 32px;
  height: 48px;
  width: 48px;
  cursor: pointer;
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
  cursor: pointer;

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
