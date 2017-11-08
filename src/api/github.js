import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com'
})

const searchCode = (queryParts) => api.get('/search/code', {
  params: {
    q: queryParts.join(' ')
  }
})

// https://api.github.com/search/code?q=molecules+in:path+language:js+repo:RoyalIcing/lofi.design
export const listJSComponents = ({
  repo
}) => searchCode([
  'components',
  'in:path',
  'language:js',
  `repo:${repo}`
])

export const listJSMolecules = ({
  repo
}) => searchCode([
  'molecules',
  'in:path',
  'language:js',
  `repo:${repo}`
])

export const loadContents = ({
  url
}) => axios.get(url)
