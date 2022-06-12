import React from 'react';

import { connect } from 'react-redux';

class JokesList extends React.Component {
    render() {
        return(<div>
            
           { this.props.jokesList?.map(jokes => ( 
              <div> {jokes.setup} : {jokes.delivery } </div>
              ))
            }

        </div>);
    };

};

const mapStateToProps = ({jokes}) => ({jokesList: jokes.jokesList.jokes})
export default connect(mapStateToProps)(JokesList);