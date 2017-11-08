import { loadContents } from '../../api/github'

export const initial = () => ({
  size: null,
  content: null
})

export function * load({ url }, prev) {
  if (!prev || url !== prev.url) {
    // Clear previous data
    yield (previous) => ({ size: null, content: null, previous })
    
    yield loadContents({ url })
      .then(({ data: { size, content: content64 } }) => ({
        size,
        content: decodeURIComponent(escape(atob(content64)))
      }))
  }
}
