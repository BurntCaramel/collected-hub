import {h} from 'preact'
import Link from '../../router/Link'

export default ({
  ownerName,
  repoName
}) => (
  <h1 className='text-lg'>
    <Link to={{ ownerName }}>{ ownerName }</Link>
    { repoName && [
      ' / ',
      <Link to={{ ownerName, repoName }}>
        <strong>{ repoName }</strong>
      </Link>
    ] }
  </h1>
)
