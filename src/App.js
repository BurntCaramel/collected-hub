import './App.css'

import {h, Component} from 'preact'
import createHistory from 'history/createBrowserHistory'
import linkState from 'linkstate'
import { listJSMolecules } from './api/github'
import SearchRepos from './organisms/GitHub/SearchRepos'
import GitHubRepoComponents from './organisms/GitHub/RepoComponents'
import GitHubFileContent from './organisms/GitHub/FileContent'
import Welcome from './organisms/Welcome'
//import router from './router'
import stateForPath from './router'

export default class App extends Component {
  history = createHistory()
  goToPath = this.history.push.bind(this.history)
  onClickLink = ({ target: { href } }) => this.history.push(href)
  Link = (props) => <a { ...props } onClick={ this.onClickLink } />

  state = {
    path: (history.location || window.location).pathname,
    orgName: null,
    repoName: null,
    ...stateForPath((history.location || window.location).pathname),
    error: null,
    jsComponents: null,
    activePath: null
  }

  render(props, {
    path,
    notFound,
    orgName,
    repoName,
    jsComponents,
    activePath
  }) {
    return <div className="App">
      { path }
      <SearchRepos
        orgName={ orgName }
        repoName={ repoName }
        goToPath={ this.goToPath }
      />
      { notFound &&
        <p>Not found</p>
      || orgName && repoName && (
        <GitHubRepoComponents
          orgName={ orgName }
          repoName={ repoName }
          jsComponents={ jsComponents }
          activePath={ activePath }
          onChangeActivePath={ (activePath) => this.setState({ activePath }) }
        />
      ) || (
        <Welcome />
      ) }
    </div>
  }

  load(current, prev) {
    const { orgName, repoName } = current
    if (!!orgName && !!repoName && orgName !== prev.orgName || repoName !== prev.repoName) {
      listJSMolecules({ repo: `${orgName}/${repoName}` })
        .then(({ data }) => {
          this.setState({ jsComponents: data.items })
        })
        .catch((error) => {
          this.setState({ error })
        })
    }
  }

  componentDidMount() {
    this.stopHistory = this.history.listen((location) =>
      this.setState(stateForPath(location.pathname, this.props))
    )

    this.load(this.state, {})
  }

  async componentDidUpdate(prevProps, prevState) {
    this.load(this.state, prevState)
  }

  componentWillUnmount() {
    this.stopHistory()
  }
}
