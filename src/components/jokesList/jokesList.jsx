import React from 'react';

import { connect } from 'react-redux';

import PROPERTIES from '../../config/properties.js';

import './jokesList.scss';

class JokesList extends React.Component {

    showjoke(joke){
        return joke.setup !== undefined ? joke.setup +" , " +joke.delivery : joke.joke;
    }

    render() {
        return(
            <div className='jokesBlock'>
                <h2>Best {PROPERTIES.Amount} jokes! </h2>
                { this.props.jokesList?.map(joke => ( 
                    <div key ={joke.id} className='listOfJokes'>
                        <li>{this.showjoke(joke)}</li>
                    </div>
                 ))
                }
            </div>
        );
    };

};

const mapStateToProps = ({jokes}) => ({jokesList: jokes.jokesList.jokes})
export default connect(mapStateToProps)(JokesList);