/* eslint-disable react/prop-types */
import StyledButton, { StyledNav } from "./Button.styles"

const Button = ({ children, ...props }) => (
    <StyledButton {...props}>{children}</StyledButton>
)

export default Button

export const Nav = ({ children, ...props }) => (
    <StyledNav {...props}>{children}</StyledNav>
)
