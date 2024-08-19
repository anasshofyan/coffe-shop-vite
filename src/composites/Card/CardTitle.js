import styled from "styled-components"

const CardTitle = styled.h2`
    color: ${({ color, theme }) =>
        `theme.color.` + color || theme?.colors?.primary};
    font-size: 1.5rem;
    font-weight: 700;
`

export default CardTitle
