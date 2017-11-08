import {h} from 'preact'
import makeOrganism from 'preact-organism'
import * as handlers from '../../state/GitHub/Repos'

export default makeOrganism(({
  ownerName,
  repos,
  Link
}) => <div>
  { repos ? (
    repos.map((item) => (
      <Link
        href={ `/repo/${item.full_name}` }
      >
        <h2>{ item.name }</h2>
      </Link>
    ))
  ) : (
    `Loading repos for ${ownerName}…`
  ) }
</div>,
handlers)