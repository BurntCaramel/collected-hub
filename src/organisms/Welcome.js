import {h} from 'preact'
import Link from '../router/Link'
import Nav, { NavItem } from '../components/Nav'

export default (props) => <div>
  <h2>Repos:</h2>
  <Nav column>
    <NavItem to={{ ownerName: 'seek-oss', repoName: 'seek-style-guide' }} className='button'>
      Seek Style Guide
    </NavItem>
    <NavItem to={{ ownerName: 'RoyalIcing' }} className='button'>
      @RoyalIcing
    </NavItem>
    <NavItem to={{ ownerName: 'RoyalIcing', repoName: 'Collected' }} className='button'>
      @RoyalIcing / Collected
    </NavItem>
    <NavItem to={{ ownerName: 'RoyalIcing', repoName: 'lofi-bootstrap' }} className='button'>
      @RoyalIcing / lofi-bootstrap
    </NavItem>
  </Nav>
</div>