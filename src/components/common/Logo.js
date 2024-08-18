import styled from "styled-components"

const Logo = styled.img`
    src: ${({ src }) => src};
    alt: ${({ alt }) => alt || "logo"};
    height: 50px;
    width: 50px;
`

export default Logo
