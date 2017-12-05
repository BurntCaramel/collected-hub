import {h} from 'preact'
import GitHubFile from '../../components/GitHub/File'
import GitHubFileContent from './FileContent'
import classes from '../../components/classes'

export default ({
  jsComponents,
  activePath,
  onChangeActivePath
}) => <div className='relative'>
  <div
    className={
      classes([
        'hidden',
        'md:flex',
        'flex-col',
        'md:max-w-xs',
        'absolute',
        'pin-y',
        'pin-l',
        'overflow-y-scroll',
      ])
    }
  >
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
  </div>
  <div
    className={
      classes([
        'md:ml-max-w-xs',
      ])
    }
  >
    { !!activePath &&
      <GitHubFileContent
        url={ jsComponents.find(a => a.path === activePath).url }
      />
    }
  </div>
</div>