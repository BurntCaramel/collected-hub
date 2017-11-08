import createHistory from 'history/createBrowserHistory'

const history = createHistory()

export const getPath = () => (history.location || window.location).pathname
export const goToPath = history.push.bind(history)

export default history