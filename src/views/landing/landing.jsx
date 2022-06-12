import React from 'react';

import {jokesService} from '../../services/jokesService.js';
import {factsCatService} from '../../services/factsCatService.js';

class Landing extends React.Component {
    
    componentDidMount(){
        jokesService.getJokes();
        factsCatService.getFactsCat();
    }
    render() {
        return(
        <div align="center">
            <h2>Welcome</h2>
        </div>);
    };
};

export default Landing;