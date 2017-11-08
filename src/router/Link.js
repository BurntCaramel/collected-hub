import {h} from 'preact'
import history from './history'

export const onClickLink = ({ target: { href } }) => this.history.push(href)

const Link = (props) => <a { ...props } onClick={ this.onClickLink } />
export default Link