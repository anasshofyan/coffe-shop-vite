import styled from "styled-components"

const Logo = styled.img`
    src: ${({ src }) => src};
    alt: ${({ alt }) => alt || "logo"};
    height: ${({ height }) => height || "50px"};
    width: ${({ width }) => width || "50px"};
`

export default Logo
