import React from 'react';


import {jokesService} from '../../services/jokesService.js';

class Landing extends React.Component {
    
    componentDidMount(){
        jokesService.getJokes();
    }
    render() {
        return(<div align="center">
            
            Welcome

        </div>);
    };
};

export default Landing;