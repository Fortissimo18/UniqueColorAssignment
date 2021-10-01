import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const MyHeader = () => (
  <Header textAlign='left' as='h2'  >
    <Icon name='lightbulb outline' />
    <Header.Content> Lanting Ding
      <Header.Subheader>Build a better world empowered by data-driven software</Header.Subheader>
    </Header.Content>
  </Header>
)

export default MyHeader;