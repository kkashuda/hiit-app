import React from 'react'; 
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

const Homepage = () => {
    return (
        <div>
            <Header as='h2'>Welcome!</Header>
             <Header as='h3'>Pick a workout from the list or add your own</Header>
        </div>
    )
}

export default Homepage;