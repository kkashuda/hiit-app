import React from 'react'; 
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider, Menu } from 'semantic-ui-react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Homepage from './Homepage'

const Navbar = () => {

return (
<Router>
    <div>
      <Header icon textAlign='center'>
        <Icon.Group size='big'>
        <Icon size='small' name='spinner' color='pink' />
        </Icon.Group>
      </Header>
    <Menu>
      <Menu.Item as={Link} to='/'>
        Home
      </Menu.Item>
    </Menu>

    <Route exact path="/" component={Homepage}/>
</div>

  </ Router >
)}

export default Navbar;

