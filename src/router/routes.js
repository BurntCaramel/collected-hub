import {h} from 'preact'
import GitHubRepoComponents from '../organisms/GitHub/RepoComponents'

const SearchRepos = ({ goToPath, orgName, repoName }) => <div>
  <form
    onSubmit={ (e) => {
      e.preventDefault()
      const { target: { elements } } = e
      goToPath(`/repo/${elements.repoName.value}`)
    } }
  >
    <input name='repoName' value={
      orgName && repoName && `${orgName}/${repoName}`
    } />
  </form>
</div>

export default SearchRepos

export const repo = (props, orgName, repoName) => {
  return <div>
    <SearchRepos { ...props } orgName={ orgName } repoName={ repoName } />
    <GitHubRepoComponents { ...props } orgName={ orgName } repoName={ repoName } />
  </div>
}
