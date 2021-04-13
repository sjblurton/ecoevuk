import React from "react"
import { Wrapper } from "./styles/button"

const Button = ({ children, variant, disabled, ...restProps }) => {
  return (
    <Wrapper disabled={disabled} variant={variant} {...restProps}>
      {children}
    </Wrapper>
  )
}

export default Button
