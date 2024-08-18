import styled from "styled-components"

const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
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
    &:hover {
        background-color: ${({ theme }) => theme.colors.success};
        transition: background-color 0.2s;
    }
`

export default StyledButton

export const StyledNav = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    color: white;
    padding: 14px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    margin: 4px 2px;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.light};
        color: ${({ theme }) => theme.colors.dark}
        transition: background-color 0.2s;
`
