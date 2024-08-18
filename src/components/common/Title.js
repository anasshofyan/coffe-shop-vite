import styled from "styled-components"

const Title = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 24px;
        text-align: center;
    }
`

export default Title
