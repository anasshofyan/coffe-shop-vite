import styled from "styled-components"
import Container from "./common/Container"
import Grid from "./common/Grid"
import Image from "./common/Image"
import Carousel from "react-multi-carousel"
import { EnumResponsive } from "../constants/EnumResponsive"
import { EnumCofee } from "../constants/EnumCoffee"
import { formatNumber } from "../utils/format-number"

const ProductSection = () => (
    <StyledContainer>
        <Carousel responsive={EnumResponsive}>
            {EnumCofee.map((cofee, index) => (
                <StyledGrid key={index}>
                    <StyledImage src={cofee.image} alt={cofee.name} />
                    <TextContent>
                        <h4>{cofee.series}</h4>
                        <h1>{cofee.name}</h1>
                        <p>{cofee.description}</p>
                        <Price>
                            <span>Rp</span>
                            <span>{formatNumber(cofee.price)}</span>
                        </Price>
                    </TextContent>
                </StyledGrid>
            ))}
        </Carousel>
    </StyledContainer>
)

export default ProductSection

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
`

const StyledGrid = styled(Grid)`
    gap: 20px;
    align-items: center;
`

const StyledImage = styled(Image)`
    width: 100%;
    height: auto;
    border-radius: 10px;
`

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 100%;

    h4 {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 1.2rem;
        font-family: "Times New Roman", serif;
        text-transform: uppercase;
        text-letter-spacing: 2px;
        margin: 0;
    }

    h1 {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 3rem;
        font-family: "Times New Roman", serif;
        margin: 0;
    }

    p {
        color: ${({ theme }) => theme.colors.secondary};
        font-size: 1rem;
        line-height: 1.5;
        margin: 0;
    }
`

const Price = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.dark};
    font-family: "Times New Roman", serif;

    span:first-child {
        font-size: 1rem;
        margin-right: 5px;
    }

    span:last-child {
        font-size: 2rem;
    }
`
