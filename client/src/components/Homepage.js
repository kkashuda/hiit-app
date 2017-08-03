import React from 'react'; 
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

const Homepage = () => {
    return (
        <Container>
             <br></br>
             <Header as='h2' color="pink">Why HIIT?</Header>
             <p><i> HIIT, or high-intensity interval training, is a training technique in which you give all-out, <br></br>one hundred percent effort through quick, intense bursts of exercise, followed by short, sometimes active, recovery periods. </i></p>
            <br></br>
             <Segment.Group>
                <Segment> <Header as='h3'> 1. Increase your Metabolism </Header> </Segment>
                <Segment> <Header as='h3'> 2. Efficient and Convenient </Header> </Segment>
                <Segment> <Header as='h3'> 3. No Equipment Necessary </Header> </Segment>
            </ Segment.Group>


        </Container>
    )
}

export default Homepage;