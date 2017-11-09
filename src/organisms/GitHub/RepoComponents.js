import {h} from 'preact'
import GitHubFile from '../../components/GitHub/File'
import GitHubFileContent from './FileContent'
import classes from '../../components/classes'

export default ({
  jsComponents,
  activePath,
  onChangeActivePath
}) => <div>
  { jsComponents ? (
    jsComponents.map((item) => (
      <button
        className={ classes([
          'w-full text-left p-2',
          item.path === activePath && 'active'
        ]) }
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