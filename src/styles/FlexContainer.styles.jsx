import styled from "styled-components"

const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${(props) => props.direction || "row"};
    justify-content: ${(props) => props.justify || "flex-start"};
    align-items: ${(props) => props.align || "stretch"};
    gap: ${(props) => props.gap || "0"};
`

export default FlexContainer
