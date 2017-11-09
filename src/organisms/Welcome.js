import {h} from 'preact'
import Link from '../router/Link'
import Nav, { NavItem } from '../components/Nav'

export default (props) => <div>
  <h2>Repos:</h2>
  <Nav column>
    <NavItem to={{ ownerName: 'seek-oss', repoName: 'seek-style-guide' }}>
      Seek Style Guide
    </NavItem>
    <NavItem to={{ ownerName: 'RoyalIcing' }}>
      @RoyalIcing
    </NavItem>
    <NavItem to={{ ownerName: 'RoyalIcing', repoName: 'Collected' }}>
      @RoyalIcing / Collected
    </NavItem>
    <NavItem to={{ ownerName: 'RoyalIcing', repoName: 'lofi-bootstrap' }}>
      @RoyalIcing / lofi-bootstrap
    </NavItem>
  </Nav>
</div>