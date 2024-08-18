import styled from "styled-components"

const Flex = styled.div`
    display: flex;
    flex-direction: ${(props) => props.direction || "row"};
    justify-content: ${(props) => props.justify || "flex-start"};
    align-items: ${(props) => props.align || "stretch"};
    gap: ${(props) => props.gap || "0"};
    width: 100%;
`

export default Flex
