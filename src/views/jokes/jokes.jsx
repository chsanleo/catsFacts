import React from 'react';

import JokesList from '../../components/jokesList/jokesList.jsx'
import { jokesService } from '../../services/jokesService.js';

class Jokes extends React.Component {
    
    render() {
        return(
        <div>    
            <JokesList key={this.setState}/>
            <button onClick={() => jokesService.getJokes()}> More Jokes!</button>
        </div>);
    };
};
export default Jokes;