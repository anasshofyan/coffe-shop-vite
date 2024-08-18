/* eslint-disable react/prop-types */
import styled from "styled-components"

const Image = ({ src, alt, width = "100%", height = "auto" }) => {
    return <ImageStyled src={src} alt={alt} width={width} height={height} />
}

export default Image

const ImageStyled = styled.img`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    object-fit: cover;
`
