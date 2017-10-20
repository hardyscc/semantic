// @flow
import * as React from 'react'
import { Menu, Button, Container } from 'semantic-ui-react'
import Router from 'next/router'

type Props = {|
  pathname: string
|}

export default ({ pathname }: Props) => (
  <Menu fixed="top" size="large">
    <Container>
      <Menu.Item
        as="a"
        active={pathname === '/'}
        onClick={() => Router.push('/')}>
        Home
      </Menu.Item>
      <Menu.Item
        as="a"
        active={pathname === '/work'}
        onClick={() => Router.push('/work')}>
        Work
      </Menu.Item>
      <Menu.Item as="a">Company</Menu.Item>
      <Menu.Item as="a">Careers</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item className="item">
          <Button as="a">Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as="a" primary>
            Sign Up
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)
