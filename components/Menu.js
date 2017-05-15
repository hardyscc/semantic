import { Menu } from 'semantic-ui-react'

export default ({ pathname }) => (
  <Menu inverted pointing>
    <Menu.Item name='index' active={pathname === '/'} href='/' />
    <Menu.Item name='about' active={pathname === '/about'} href='/about' />
    <Menu.Menu position='right'>
       <Menu.Item name='logout' onClick={() => alert('window close')} />
    </Menu.Menu>
  </Menu>
)
