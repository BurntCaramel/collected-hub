import {h} from 'preact'

const dropExtension = (name) => name.split('.').slice(0, -1).join('.')

const humanize = (camelCase) => camelCase
  .replace(/([a-z])([A-Z])/g, '$1 $2')
  .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')

export default ({
  name,
  path,
  sha,
  url
}) => (
  <div>
    <h2>{ humanize(dropExtension(name)) }</h2>
    <dl>
      <dt>Path</dt>
      <dd>{ path }</dd>
    </dl>
  </div>
)
