import { ArrowRight } from "lucide-react"
import Card from "../composites/Card"
import CardImage from "../composites/CardImage"
import CardTitle from "../composites/CardTitle"
import Button from "./common/Button"
import Container from "./common/Container"
import Grid from "./common/Grid"
import Title from "./common/Title"
import { EnumIcons } from "../constants/EnumIcons"

const OurStorySection = () => (
    <Container role="our-story-section">
        <Title>Our Story</Title>
        <Grid columns="repeat(3, 1fr)" gap="10px">
            <Card>
                <CardImage src={EnumIcons.THUMB_3} alt="placeholder" />
                <CardTitle>Point Coffe Delivery</CardTitle>
                <Button style={{ marginBottom: "12px" }} variant="primary">
                    Read More{" "}
                    <ArrowRight size={24} style={{ marginBottom: "-7px" }} />
                </Button>
            </Card>
            <Card>
                <CardImage src={EnumIcons.THUMB_4} alt="placeholder" />
                <CardTitle>Point Coffe Members</CardTitle>
                <Button style={{ marginBottom: "12px" }} variant="primary">
                    Read More{" "}
                    <ArrowRight size={24} style={{ marginBottom: "-7px" }} />
                </Button>
            </Card>
            <Card>
                <CardImage src={EnumIcons.HERO_1} alt="placeholder" />
                <CardTitle>Point Coffe Signature</CardTitle>
                <Button style={{ marginBottom: "12px" }} variant="primary">
                    Read More{" "}
                    <ArrowRight size={24} style={{ marginBottom: "-7px" }} />
                </Button>
            </Card>
        </Grid>
    </Container>
)

export default OurStorySection
