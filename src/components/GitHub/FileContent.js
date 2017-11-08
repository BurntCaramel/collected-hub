import {h} from 'preact'

export default ({
  size,
  content
}) => (
  <div>
    <dl>
      <dt>Size</dt>
      <dd>{ size }</dd>
    </dl>

    <pre>
      <code>{ content }</code>
    </pre>
  </div>
)