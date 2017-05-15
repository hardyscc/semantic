import App from '../components/App'
import Menu from '../components/Menu'

export default (props) => (
  <App>
    <Menu pathname={props.url.pathname}/>
    <div className="ui header">Welcome</div>
  </App>
)
