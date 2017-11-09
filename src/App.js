import './App.css'

import {h, Component} from 'preact'
import { listJSAllComponents } from './api/github'
import SearchRepos from './organisms/GitHub/SearchRepos'
import RepoComponents from './organisms/GitHub/RepoComponents'
import ListRepos from './organisms/GitHub/ListRepos'
import Welcome from './organisms/Welcome'
import GitHubHeader from './organisms/GitHub/Header'
import Nav from './components/Nav'
import stateForPath from './router'
import history, { getPath, goToPath } from './router/history'
import Link from './router/Link'

export default class App extends Component {
  state = {
    path: getPath(),
    orgName: null,
    repoName: null,
    ...stateForPath(getPath()),
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
      <Nav>
        <div>
          <Link href='/'>Collected Hub</Link>
        </div>
        <SearchRepos
          orgName={ orgName }
          repoName={ repoName }
          goToPath={ goToPath }
        />
      </Nav>
      { orgName &&
        <GitHubHeader
          ownerName={ orgName }
          repoName={ repoName }
        />
      }
      { notFound &&
        <p>Not found</p>
      || orgName && (
        repoName && (
          <RepoComponents
            orgName={ orgName }
            repoName={ repoName }
            jsComponents={ jsComponents }
            activePath={ activePath }
            onChangeActivePath={ (activePath) => this.setState({ activePath }) }
          />
        ) || (
          <ListRepos
            ownerName={ orgName }
            Link={ Link }
          />
        )
      ) || (
        <Welcome />
      ) }
    </div>
  }

  load(current, prev) {
    const { orgName, repoName } = current
    if (!!orgName && !!repoName && orgName !== prev.orgName || repoName !== prev.repoName) {
      listJSAllComponents({ repo: `${orgName}/${repoName}` })
        .then((jsComponents) => {
          this.setState({ jsComponents })
        })
        .catch((error) => {
          this.setState({ error })
        })
    }
  }

  componentDidMount() {
    this.stopHistory = history.listen((location) =>
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
