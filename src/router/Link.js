import {h} from 'preact'
import history from './history'
import pathForState from './pathForState'
import classes from '../components/classes'

export const onClickLink = ({ target: { href } }) => this.history.push(href)

const Link = (props) => {
  let { href, to, button = false, className, ...rest } = props
  if (to) {
    href = pathForState(to)
  }

  let classList = [className, 'no-underline']
  if (button) {
    classList.push('inline-block bg-key hover:bg-purple-dark text-white font-bold py-2 px-3 rounded')
  }
  else {
    classList.push('hover:underline')
  }

  return (
    <a
      { ...rest }
      className={ classes(classList) }
      href={ href }
      onClick={ this.onClickLink }
    />
  )
}
export default Link
