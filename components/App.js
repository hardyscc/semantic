// @flow
import Head from 'next/head'

type AppProps = {|
  children?: any
|}

const App = ( { children }: AppProps ) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
    </Head>
    {children}
    <style jsx global>{`
      * {
        font-family: Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif;
      }
      body {
        margin: 0;
        padding: 25px 50px;
      }
    `}</style>
  </div>
)

export default App
