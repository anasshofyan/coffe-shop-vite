import styled from "styled-components"

const Card = styled.div`
    border-radius: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.secondary + "33"};

    &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.2s;
    }
`

export default Card
