import React from 'react';
import { connect } from 'react-redux';

import API_URL_JOKES from '../../config/api';

import './about.scss'

class About extends React.Component {
    render() {
        return(
            <div className='about'>
                {this.props.jokesList?
                    <div className={'api '+'elemento'}><h2>APIs:</h2><li>Thanks to the API: <a href={API_URL_JOKES} target="_blank">{API_URL_JOKES}</a></li></div>
                    :<div className={'api '+'elemento'}></div>}
                <div className={'me '+'elemento'}>
                    <h2> About me</h2>
                    <img src="https://avatars2.githubusercontent.com/u/65183792?s=400&u=5e2dc36e1830dd9429313f09a13737d88798c8e1&v=4"alt="Christian Sanchez"/>
                    <a href ="https://github.com/chsanleo"><img src ="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="githubChristian"  target="_blank"  width="40" height="40"/></a>
                </div>
            </div>
        );
    };
};
const mapStateToProps = ({jokes}) => ({jokesList: jokes.jokesList.jokes})
export default connect(mapStateToProps)(About);