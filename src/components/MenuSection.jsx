import { EnumIcons } from "../constants/EnumIcons"
import Container from "./common/Container"
import Flex from "./common/Flex"
import Image from "./common/Image"
import Title from "./common/Title"

const MenuSection = () => (
    <Container>
        <Flex direction="column">
            <Title>Seasonal Menu</Title>
            <Image
                src={EnumIcons.THUMB_1}
                height="500px"
                alt="Menu Point Coffe"
            />
        </Flex>
    </Container>
)

export default MenuSection
