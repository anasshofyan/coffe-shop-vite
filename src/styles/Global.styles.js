import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.dark};
  }
`

export const ShowOnDesktop = styled.div`
    display: flex;
    @media (max-width: 768px) {
        display: none;
    }
`

export const ShowOnMobile = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
    }
`
