import {h} from 'preact'

export default ({ goToPath, orgName, repoName }) => <div>
  <form
    onSubmit={ (e) => {
      e.preventDefault()
      const { target: { elements } } = e
      goToPath(`/repo/${elements.repoName.value}`)
    } }
  >
    <input
      name='repoName'
      value={ orgName && repoName && `${orgName}/${repoName}` }
      placeholder='Enter user/repo name'
    />
  </form>
</div>
