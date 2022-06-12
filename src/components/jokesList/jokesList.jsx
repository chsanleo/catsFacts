import React from 'react';

import { connect } from 'react-redux';

import './jokesList.scss';

class JokesList extends React.Component {

    showjoke(joke){
        return joke.setup != undefined ? joke.setup +" , " +joke.delivery : joke.joke;
    }

    render() {
        return(
            <div className='jokesBlock'>
           { this.props.jokesList?.map(joke => ( 
                    <div className='listOfJokes'>
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