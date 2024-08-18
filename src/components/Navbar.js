import styled from "styled-components"

const Navbar = styled.nav`
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: space-between;
    padding: 14px;
    align-items: center;
    color: white;
`

export const NavbarWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (min-width: 768px) {
        flex-direction: row;
        display: flex;
    }

    @media (max-width: 768px) {
        padding: 0 10px;
        display: flex;
    }

    @media (max-width: 480px) {
        padding: 0 5px;
    }
`

export default Navbar

export const NavItem = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    color: white;
    padding: 14px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    justify-content: space-between;
    margin: 4px 2px;
    cursor: pointer;
    text-transform: uppercase;
    &:hover {
        background-color: ${({ theme }) => theme.colors.light};
        color: ${({ theme }) => theme.colors.primary};
        transition: background-color 0.2s;
    }
`

export const NavMenu = styled.div`
    display: flex;
    gap: 20px;
`

export const NavIcons = styled.div`
    display: flex;
    gap: 15px;
`
