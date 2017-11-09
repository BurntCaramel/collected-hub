import {h} from 'preact'
import Link from '../router/Link'
import classes from './classes'

export const NavItem = (props) => (
  <li className='nav-item'>
    <Link
      { ...props }
      className={ classes(['nav-link', props.className]) }
    />
  </li>
)

export default ({
  column = false,
  children
}) => (
  <nav>
    <ul className={ classes(['justify-content-between', column && 'flex-column']) }>
      { children }
    </ul>
  </nav>
)
