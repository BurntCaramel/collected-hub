import {h} from 'preact'

export default (routes) => (path, props) => {
  let pieces = path.split('/')

  if (pieces[0] === '') {
    pieces.shift()
  }

  if (pieces[pieces.length - 1] === '') {
    pieces.pop()
  }

  if (pieces.length === 0) {
    return routes.default(props)
  }

  console.log('pieces', pieces)
  
  const [ first, ...rest ] = pieces
  console.log(routes[first].length, (rest.length + 1))
  if (routes[first] && routes[first].length <= (rest.length + 1)) {
    return routes[first].apply(null, [ props, ...rest ])
  }
  
  return (
    <div>Not Found { path }</div>
  )
}