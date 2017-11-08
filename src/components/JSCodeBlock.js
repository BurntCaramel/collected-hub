import {h} from 'preact'
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light'
import js from 'react-syntax-highlighter/dist/languages/javascript'
import style from 'react-syntax-highlighter/dist/styles/monokai-sublime'

registerLanguage('javascript', js)

export default ({
  children
}) => (
  <SyntaxHighlighter
    language='javascript'
    style={ style }
    children={ children }
    customStyle={{
      padding: '1rem'
    }}
  />
)