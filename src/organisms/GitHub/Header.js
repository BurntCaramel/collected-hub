import {h} from 'preact'
import Link from '../../router/Link'

export default ({
  ownerName,
  repoName
}) => (
  <h1>
    <Link href={ `/repo/${ownerName}` }>{ ownerName }</Link>
    { repoName && [
      ' / ',
      <Link href={ `/repo/${ownerName}/${repoName}` }>
        <strong>{ repoName }</strong>
      </Link>
    ] }
  </h1>
)
