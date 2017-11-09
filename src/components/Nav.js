import {h} from 'preact'
import Link from '../router/Link'
import classes from './classes'

export const NavItem = (props) => (
  <li className='mb-1'>
    <Link
      button
      { ...props }
    />
  </li>
)

export default ({
  column = false,
  children
}) => (
  <nav>
    <ul className={ classes(['list-reset', 'justify-content-between', column && 'flex-column']) }>
      { children }
    </ul>
  </nav>
)
