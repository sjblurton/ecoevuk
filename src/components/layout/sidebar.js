import React from "react"
import { Link } from "gatsby"
import {
  Wrapper,
  Logo,
  ListItem,
  List,
  CloseIcon,
  ButtonUnderline,
  LinkWrapper,
  StyledLink,
} from "./styles/sidebar"
import LogoSVG from "../../assets/svg/logo"
import CloseSVG from "../../assets/icons/nav/CloseIcon"
import { LINK_NAMES, ROUTS } from "../../data/content"

const Sidebar = ({ sidebarIsOpen, setSidebarIsOpen }) => {
  return (
    <Wrapper sidebarOpen={sidebarIsOpen}>
      <CloseIcon onClick={() => setSidebarIsOpen(false)}>
        <CloseSVG />
      </CloseIcon>
      <Link to={ROUTS.HOME}>
        <Logo onClick={() => setSidebarIsOpen(false)}>
          <LogoSVG alt="ecoevuk-logo" />
        </Logo>
      </Link>
      <List>
        <ListItem>
          <LinkWrapper onClick={() => setSidebarIsOpen(false)}>
            <StyledLink to={ROUTS.HOME}>{LINK_NAMES.HOME}</StyledLink>
            <ButtonUnderline />
          </LinkWrapper>
        </ListItem>
        <ListItem>
          <LinkWrapper onClick={() => setSidebarIsOpen(false)}>
            <StyledLink to={ROUTS.ABOUT}>{LINK_NAMES.ABOUT}</StyledLink>
            <ButtonUnderline />
          </LinkWrapper>
        </ListItem>
        <ListItem>
          <LinkWrapper onClick={() => setSidebarIsOpen(false)}>
            <StyledLink to={ROUTS.CHARGERS}>{LINK_NAMES.CHARGERS}</StyledLink>
            <ButtonUnderline />
          </LinkWrapper>
        </ListItem>
        <ListItem>
          <LinkWrapper onClick={() => setSidebarIsOpen(false)}>
            <StyledLink to={ROUTS.CONTACT}>{LINK_NAMES.CONTACT}</StyledLink>
            <ButtonUnderline />
          </LinkWrapper>
        </ListItem>
      </List>
    </Wrapper>
  )
}

export default Sidebar
