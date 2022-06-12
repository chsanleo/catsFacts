import React from 'react';
import API_URL from '../../config/api';

import './about.scss'

class About extends React.Component {
    render() {
        return(
            <div className='About' align='center'>
                <div className='api'>Thanks to the API: <a href={API_URL} target="_blank">{API_URL}</a></div>
                <div className='me'>
                <img src="https://avatars2.githubusercontent.com/u/65183792?s=400&u=5e2dc36e1830dd9429313f09a13737d88798c8e1&v=4"alt="Christian Sanchez"/>
                <a href ="https://github.com/chsanleo"><img src ="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="githubChristian"  target="_blank"  width="40" height="40"/></a>
                </div>
            </div>
        );
    };
};
export default About;