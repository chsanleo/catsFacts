import React from 'react';

import { connect } from 'react-redux';

class JokesList extends React.Component {

    showjoke(joke){
        return joke.setup!= undefined? joke.setup +" , " +joke.delivery : joke.joke;
    }

    render() {
        return(<div>
            
           { this.props.jokesList?.map(joke => ( 
              <div>
                  {this.showjoke(joke)}
              </div>
              ))
            }

        </div>);
    };

};

const mapStateToProps = ({jokes}) => ({jokesList: jokes.jokesList.jokes})
export default connect(mapStateToProps)(JokesList);