import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import LogoSVG from "../../assets/svg/logo"
import { ROUTS, LINK_NAMES } from "../../data/content"
import {
  Content,
  Logo,
  Wrapper,
  List,
  Burger,
  StyledLink,
  ButtonUnderline,
  LinkWrapper,
} from "./styles/header"
import BurgerIcon from "../../assets/icons/nav/BurgerIcon"
import Sidebar from "./sidebar"

const Header = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  return (
    <>
      <Sidebar
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      />
      <Wrapper>
        <Content>
          <Link to={ROUTS.HOME}>
            <Logo>
              <LogoSVG width="100%" height="100%" />
            </Logo>
          </Link>
          <List>
            <LinkWrapper>
              <StyledLink to={ROUTS.HOME}>{LINK_NAMES.HOME}</StyledLink>
              <ButtonUnderline />
            </LinkWrapper>
            <LinkWrapper>
              <StyledLink to={ROUTS.ABOUT}>{LINK_NAMES.ABOUT}</StyledLink>
              <ButtonUnderline />
            </LinkWrapper>
            <LinkWrapper>
              <StyledLink to={ROUTS.CHARGERS}>{LINK_NAMES.CHARGERS}</StyledLink>
              <ButtonUnderline />
            </LinkWrapper>
            <LinkWrapper>
              <StyledLink to={ROUTS.CONTACT}>{LINK_NAMES.CONTACT}</StyledLink>
              <ButtonUnderline />
            </LinkWrapper>
          </List>
          <Burger onClick={() => setSidebarIsOpen(true)}>
            <BurgerIcon />
          </Burger>
        </Content>
      </Wrapper>
    </>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
