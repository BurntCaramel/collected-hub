import {h} from 'preact'
import Link from '../router/Link'

export const NavItem = ({
  href,
  children
}) => (
  <li>
    <Link href={ href }>{ children }</Link>
  </li>
)

export default ({
  children
}) => (
  <nav>
    <ul>
      { children }
    </ul>
  </nav>
)
