import React from 'react';
import { connect } from 'react-redux';

import { utils } from '../../utils/utils.js';
import APIs from '../../config/api.js';

import './about.scss'

class About extends React.Component {
    render() {
        return(
            <div className='about'>
                <div className='element'>
                <h2>APIs:</h2>
                {this.props.jokesList?
                    <div className='api'><li>Thanks to the API: <a href={APIs.JOKES_API} target="_blank" rel="noreferrer">{APIs.JOKES_API}</a></li></div>
                    :<div></div>}
                {!utils.isEmptyObject(this.props.factsCatList)?
                    <div className='api'><li>Thanks to the API: <a href={APIs.FACTSCAT_API} target="_blank" rel="noreferrer">{APIs.FACTSCAT_API}</a></li></div>
                    :<div></div>}
                    </div>
                <div className='element'>
                <h2> About me</h2>
                <div>
                    <img src="https://avatars2.githubusercontent.com/u/65183792?s=400&u=5e2dc36e1830dd9429313f09a13737d88798c8e1&v=4"alt="Christian Sanchez"/>
                    <a href ="https://github.com/chsanleo"><img src ="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="githubChristian"  target="_blank"  width="40" height="40"/></a>
                </div>
                </div>
            </div>
        );
    };
};
const mapStateToProps = ({
    jokes, factsCat
}) => ({
    jokesList: jokes.jokesList?.jokes,
    factsCatList: factsCat.factsCatList
})
export default connect(mapStateToProps)(About);