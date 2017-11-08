import { listRepos } from '../../api/github'

export const initial = () => ({
  repos: null
})

export function * load({ ownerName }, prev) {
  if (!prev || ownerName !== prev.ownerName) {
    // Clear previous data
    yield ({ repos: null })
    
    yield listRepos(ownerName)
      .then(({ data: repos }) => ({ repos }))
  }
}
