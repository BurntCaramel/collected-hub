import {h} from 'preact'
import history from './history'
import pathForState from './pathForState'

export const onClickLink = ({ target: { href } }) => this.history.push(href)

const Link = (props) => {
  let { href, to, ...rest } = props
  if (to) {
    href = pathForState(to)
  }

  return (
    <a
      { ...rest }
      href={ href }
      onClick={ this.onClickLink }
    />
  )
}
export default Link
