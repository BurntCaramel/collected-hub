export default (stateHandlers) => (path, props) => {
  let pieces = path.split('/')

  if (pieces[0] === '') {
    pieces.shift()
  }

  if (pieces[pieces.length - 1] === '') {
    pieces.pop()
  }

  if (pieces.length === 0) {
    return stateHandlers.default(props)
  }
  
  const [ first, ...rest ] = pieces
  if (stateHandlers[first]) {
    return stateHandlers[first].apply(null, [ props, ...rest ])
  }
  
  return (
    { notFound: true }
  )
}