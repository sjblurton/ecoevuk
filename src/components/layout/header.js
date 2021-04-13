import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import LogoSVG from "../../assets/svg/logo"
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

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <Logo>
          <LogoSVG width="100%" height="100%" />
        </Logo>
      </Link>
      <List>
        <LinkWrapper>
          <StyledLink to="/">Home</StyledLink>
          <ButtonUnderline />
        </LinkWrapper>
        <LinkWrapper>
          <StyledLink to="/">About</StyledLink>
          <ButtonUnderline />
        </LinkWrapper>
        <LinkWrapper>
          <StyledLink to="/">Charges</StyledLink>
          <ButtonUnderline />
        </LinkWrapper>
        <LinkWrapper>
          <StyledLink to="/">Contact</StyledLink>
          <ButtonUnderline />
        </LinkWrapper>
      </List>
      <Burger></Burger>
    </Content>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
