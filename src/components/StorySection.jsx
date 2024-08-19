import { EnumIcons } from "../constants/EnumIcons"
import Container from "./common/Container"
import Image from "./common/Image"

const StorySection = () => (
    <Container>
        <Image src={EnumIcons.STORY_1} alt="Story 1" />
        <p>
            1. 100% INDONESIAN COFFEE BEAN : Point Coffee menggunakan 100% biji
            kopi asli Indonesia dengan kualitas terbaik
        </p>
        <Image src={EnumIcons.STORY_2} alt="Story 2" />
        <p>
            2. FRESHLY ROASTED : Kopi Point Coffee dipanggang setiap hari agar
            selalu fresh dan nikmat
        </p>
        <Image src={EnumIcons.STORY_3} alt="Story 3" />
        <p>
            3. SPECIAL RECIPE : Kopi Point Coffee memiliki resep khusus yang
            membuat rasanya unik dan berbeda
        </p>
        <Image src={EnumIcons.STORY_4} alt="Story 4" />
        <p>
            4. BEST QUALITY : Kopi Point Coffee memiliki kualitas terbaik yang
            terjamin
        </p>
    </Container>
)

export default StorySection
