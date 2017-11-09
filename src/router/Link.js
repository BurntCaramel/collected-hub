import {h} from 'preact'
import history from './history'
import pathForState from './pathForState'

export const onClickLink = ({ target: { href } }) => this.history.push(href)

const Link = (props) => {
  let href = props.href
  if (props.to) {
    href = pathForState(props.to)
  }
  return (
    <a
      { ...props }
      href={ href }
      onClick={ this.onClickLink }
    />
  )
}
export default Link
