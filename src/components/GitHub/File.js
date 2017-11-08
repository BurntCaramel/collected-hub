import {h} from 'preact'

const dropExtension = (name) => name.split('.').slice(0, -1).join('.')

export default ({
  name,
  path,
  sha,
  url
}) => (
  <div>
    <h2>{ dropExtension(name) }</h2>
    <dl>
      <dt>Path</dt>
      <dd>{ path }</dd>
    </dl>
  </div>
)
