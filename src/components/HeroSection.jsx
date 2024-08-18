import styled from "styled-components"
import Image from "./common/Image"
import Carousel from "react-multi-carousel"
import Button from "./common/Button"
import { HeroImages } from "./HeroImages"
import { EnumResponsive } from "../constants/EnumResponsive"

const HeroSection = () => (
    <Carousel responsive={EnumResponsive}>
        {HeroImages.map((image, index) => (
            <HeroSectionStyles key={index}>
                <Image src={image.src} alt="hero image" />
                <Button style={{ position: "absolute" }} variant="primary">
                    {image.icon}
                    {image.buttonText}
                </Button>
            </HeroSectionStyles>
        ))}
    </Carousel>
)

export default HeroSection

const HeroSectionStyles = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    overflow: hidden;

    img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        object-fit: cover;
        width: 100%;
    }
`
