import {Link} from 'react-router-dom';
import React from 'react';

import './header.scss';


class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <header className="comp-Header">
                <div>
                    <ul className="list-icons">
                        <li> <Link to='/jokes' className="accesos">Jokes!</Link> </li>
                        <li> <Link to='/about' className="accesos">About</Link> </li>
                    </ul>
                </div>
            </header>
        );
    }
}
export default Header;