import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com'
})

export const listRepos = (owner) => api.get(`/users/${owner}/repos`)

const searchCode = (queryParts) => api.get('/search/code', {
  params: {
    q: queryParts.join(' ')
  }
})

// https://api.github.com/search/code?q=molecules+in:path+language:js+repo:RoyalIcing/lofi.design
const listJSComponents = ({
  repo
}) => searchCode([
  'components',
  'in:path',
  'language:js',
  `repo:${repo}`
])
.then(res => res.data.items)

const listJSMolecules = ({
  repo
}) => searchCode([
  'molecules',
  'in:path',
  'language:js',
  `repo:${repo}`
])
.then(res => res.data.items)

const listJSReactDir = ({
  repo
}) => searchCode([
  'react',
  'in:path',
  'language:js',
  `repo:${repo}`
])
.then(res => res.data.items)

export const listJSAllComponents = ({
  repo
}) => Promise.all([
  listJSComponents({ repo }),
  listJSMolecules({ repo }),
  listJSReactDir({ repo })
])
.then(arrayOfItems => [].concat(...arrayOfItems))

export const loadContents = ({
  url
}) => axios.get(url)
