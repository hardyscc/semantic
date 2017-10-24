// @flow
import * as React from 'react'
import Head from 'next/head'

type Props = {|
  children?: React.Node
|}

const App = ({ children }: Props) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
      />
    </Head>
    {children}
  </div>
)

export default App
