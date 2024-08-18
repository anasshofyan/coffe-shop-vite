import styled, { css } from "styled-components"

const BaseButton = css`
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 50px;
    transition: background-color 0.2s;
`

const PrimaryButton = css`
    background-color: ${({ theme }) => theme.colors.primary};

    &:hover {
        background-color: ${({ theme }) => theme.colors.success};
    }
`

const SecondaryButton = css`
    background-color: transparent;
`

const Button = styled.button`
    ${BaseButton}
    ${({ variant }) => variant === "primary" && PrimaryButton}
    ${({ variant }) => variant === "secondary" && SecondaryButton}
`

export default Button
