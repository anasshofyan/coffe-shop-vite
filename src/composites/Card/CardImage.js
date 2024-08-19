import styled from "styled-components"

const CardImage = styled.img`
    width: 100%;
    height: ${({ height }) => height || "200px"};
    object-fit: cover;
    border-top-left-radius: ${({ borderRadius }) =>
        borderRadius?.topLeft || "10px"};
    border-top-right-radius: ${({ borderRadius }) =>
        borderRadius?.topRight || "10px"};
    border-bottom-left-radius: ${({ borderRadius }) =>
        borderRadius?.bottomLeft || "0"};
    border-bottom-right-radius: ${({ borderRadius }) =>
        borderRadius?.bottomRight || "0"};
`

export default CardImage
