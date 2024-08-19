import styled from "styled-components"

const Title = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ size }) => size || "1.5rem"};
    font-weight: 700;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: ${({ size }) => size || "1.2rem"};
        text-align: center;
    }
`

export default Title
