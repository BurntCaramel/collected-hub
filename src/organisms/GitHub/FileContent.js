import {h} from 'preact'
import makeOrganism from 'preact-organism'
import FileContent from '../../components/GitHub/FileContent'
import * as handlers from '../../state/GitHub/FileContent'

const C = ({
  loadError,
  ...rest
}) => (
  !!loadError ? (
    <p>Error loading: {loadError.message}</p>
  ) : (
    <FileContent { ...rest } />
  )
)

export default makeOrganism(C, handlers)
