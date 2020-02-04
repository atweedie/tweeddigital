import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Social = () => {
    return (
        <div className="social">
            <a  className="linkedin-link" href="https://www.linkedin.com/in/adam-tweedie-a63765b0/" rel="nofollow noopener noreferrer" target="_blank"><FontAwesomeIcon icon={["fab", "linkedin"]}/></a>
            <a className="twitter-link" href="https://twitter.com/ATweedz?lang=en" rel="nofollow noopener noreferrer" target="_blank"><FontAwesomeIcon icon={["fab", "twitter"]}/></a>
            <a className="github-link" href="https://github.com/atweedie" rel="nofollow noopener noreferrer" target="_blank"><FontAwesomeIcon icon={["fab", "github"]}/></a>
        </div>
    )
}

export default Social
