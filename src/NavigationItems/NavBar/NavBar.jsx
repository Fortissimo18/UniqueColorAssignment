import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const menuStyle = {
   fontSize: '3vmin', 
   fontWeight:'600'
}

const NavBar = () => (
   <Menu secondary pointing floated='right' style={menuStyle}> 
    <Menu.Item name='Version 1' as={NavLink} to='/' exact />
    <Menu.Item name='Verison 2' as={NavLink} to='/version2' />
    <Menu.Item name='Version 3' as={NavLink} to='/version3' />
    <Menu.Item name='Project Plan' as={NavLink} to='/plan' />
  </Menu>
)

export default NavBar;