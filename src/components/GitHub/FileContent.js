import {h} from 'preact'
import makeOrganism from 'preact-organism'
const JSCodeBlock = import('../JSCodeBlock')

const PlainCodeBlock = ({
  children
}) => (
  <pre><code>{ children }</code></pre>
)

export default makeOrganism(({
  size,
  content,
  CodeBlock
}) => (
  <div>
    <dl>
      <dt>Size</dt>
      <dd>{ size }</dd>
    </dl>

    { content &&
      <CodeBlock>{ content }</CodeBlock>
    }
  </div>
), {
  initial: () => ({
    CodeBlock: PlainCodeBlock
  }),
  load: () => (
    JSCodeBlock.then(module => ({ CodeBlock: module.default }))
  )
})