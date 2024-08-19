import Card from "../composites/Card/Card"
import CardImage from "../composites/Card/CardImage"
import CardTitle from "../composites/Card/CardTitle"
import { EnumIcons } from "../constants/EnumIcons"
import Button from "./common/Button"
import Container from "./common/Container"
import Grid from "./common/Grid"
import Title from "./common/Title"

const MemberSection = () => (
    <Container
        style={{ marginTop: "100px", marginBottom: "100px" }}
        role="members"
    >
        <Title>Membership</Title>
        <Grid columns="repeat(2, 1fr)" gap="20px">
            <Card noBorder>
                <div>
                    <CardTitle color="dark">Membership</CardTitle>
                    <p>Join Member dan dapatkan Stampnya!</p>
                    <Button variant="primary">JOIN MEMBER</Button>
                </div>
            </Card>
            <Card noBorder>
                <CardImage
                    borderRadius={{ topLeft: "0", topRight: "0" }}
                    height="300px"
                    src={EnumIcons.THUMB_4}
                    alt="member"
                />
            </Card>
        </Grid>
    </Container>
)

export default MemberSection
