export default ({
  ownerName,
  repoName
}) => {
  if (ownerName) {
    if (repoName) {
      return `/repo/${ownerName}/${repoName}`
    }
    else {
      return `/repo/${ownerName}`
    }
  }
  else {
    return '/'
  }
}
