import styled from "styled-components"

const Grid = styled.div`
    display: grid;
    grid-template-columns: ${({ columns }) => columns || "repeat(3, 1fr)"};
    gap: ${({ gap }) => gap || "20px"};
    margin: ${({ margin }) => margin || "0 auto"};
    width: 100%;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export default Grid
