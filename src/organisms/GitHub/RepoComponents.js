import {h} from 'preact'
import GitHubFile from '../../components/GitHub/File'
import GitHubFileContent from './FileContent'

export default ({
  jsComponents,
  activePath,
  onChangeActivePath
}) => <div>
  { jsComponents ? (
    jsComponents.map((item) => (
      <button
        className={ item.path === activePath ? 'active' : '' }
        onClick={ () => onChangeActivePath(item.path) }
      >
        <GitHubFile
          key={ item.path }
          { ...item }
        />
      </button>
    ))
  ) : (
    'Loading…'
  ) }
  { !!activePath &&
    <GitHubFileContent
      url={ jsComponents.find(a => a.path === activePath).url }
    />
  }
</div>