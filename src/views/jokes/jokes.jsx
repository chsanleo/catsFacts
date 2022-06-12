import React from 'react';

import JokesList from '../../components/jokesList/jokesList.jsx'
import { jokesService } from '../../services/jokesService.js';

import './jokes.scss';

class Jokes extends React.Component {
    
    render() {
        return(
        <div className='jokes'>    
            <JokesList key={this.setState}/>
            <button onClick={() => jokesService.getJokes()}> More Jokes!</button>
        </div>);
    };
};
export default Jokes;