import Link from 'next/link'
import Router from 'next/router'
import { Menu } from 'semantic-ui-react'

export default ({ pathname }) => (
  <Menu inverted pointing>
    <Menu.Item name='index' active={pathname === '/'} onClick={() => Router.push('/')} />
    <Menu.Item name='about' active={pathname === '/about'} onClick={() => Router.push('/about')} />
    <Menu.Menu position='right'>
       <Menu.Item name='logout' onClick={() => alert('window close')} />
    </Menu.Menu>
  </Menu>
)
