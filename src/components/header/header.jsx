import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import React from 'react';

import './header.scss';

class Header extends React.Component {
    render() {
        return (
            <header className="comp-Header">
                <ul className="list-icons">
                    {this.props.jokesList?
                        <li> <Link to='/jokes' className="accesos">Jokes!</Link> </li>
                        :<li></li>}
                    <li> <Link to='/about' className="accesos">About</Link> </li>
                </ul>
            </header>
        );
    }
}

const mapStateToProps = ({jokes}) => ({jokesList: jokes.jokesList.jokes})
export default connect(mapStateToProps)(Header);