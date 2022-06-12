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
            <header>
                <div>
                    <li>
                        <Link to="/" >Cat Facts!</Link>
                    </li>
                </div>
            </header>
        );
    }
}
export default Header;