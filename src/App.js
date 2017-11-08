import './App.css'

import {h, Component} from 'preact'
import { listJSMolecules } from './api/github'
import GitHubFile from './components/GitHub/File'
import GitHubFileContent from './organisms/GitHub/FileContent'

export default class App extends Component {
  state = {
    error: null,
    jsComponents: null,
    activePath: null
  }

  render(props, {
    jsComponents,
    activePath
  }) {
    return <div className="App">
      { jsComponents ? (
        jsComponents.map((item) => (
          <button
            className={ item.path === activePath ? 'active' : '' }
            onClick={ () => { this.setState({ activePath: item.path }) } }
          >
            <GitHubFile
              key={ item.path }
              { ...item }
            />
          </button>
        ))
      ) : (
        'Loading…'
      ) }
      { !!activePath &&
        <GitHubFileContent
          url={ jsComponents.find(a => a.path === activePath).url }
        />
      }
    </div>
  }

  componentDidMount() {
    listJSMolecules({ repo: 'RoyalIcing/lofi.design' })
      .then(({ data }) => {
        this.setState({ jsComponents: data.items })
      })
      .catch((error) => {
        this.setState({ error })
      })
  }
}
