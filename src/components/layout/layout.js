import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import GlobalStyle from "./styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import { theme } from "../../theme/theme"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header siteTitle="ECOEVUK" />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
