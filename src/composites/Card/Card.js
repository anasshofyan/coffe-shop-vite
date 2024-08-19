import styled from "styled-components"

const Card = styled.div`
    border-radius: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border: ${({ noBorder, theme }) =>
        !noBorder ? `1px solid ${theme.colors.secondary + "33"}` : "none"};

    &:hover {
        box-shadow: ${({ noBorder }) =>
            !noBorder ? "0 0 10px 0 rgba(0, 0, 0, 0.1)" : "none"};
        transition: box-shadow 0.2s;
    }
`

export default Card
