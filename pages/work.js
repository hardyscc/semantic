// @flow
import * as React from 'react'
import App from '../components/App'
import FixedMenu from '../components/FixedMenu'

export default ({ url }: any) => (
  <App>
    <FixedMenu pathname={url.pathname} />
    <div className="ui header">Work</div>
  </App>
)
