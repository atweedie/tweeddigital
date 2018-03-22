import React from 'react';
import Social from '../Social';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {CSSTransition} from 'react-transition-group';

const Splash = () => {
    return (
        <div className="splash">
            <a name="/"></a>
            <div className="splash-overlay">
                    <div className="splash-content animated fadeInUp">
                        <h1 className="splash-name">Adam Tweedie</h1>
                        <h2 className="splash-title">Full Stack Developer</h2>
                        <img className="splash-img"src="portfolio/images/me.jpg" alt="Adam Tweedie"></img>
                        <Social/>
                        <h4 className="splash-location"><FontAwesomeIcon className="splash-icon" icon="map-marker-alt"/>Manchester, UK</h4>
                        <a href="https://drive.google.com/open?id=19JSk2gbLXqo9D7c255Bi5YLW4JOiWw8q" rel="nofollow" target="_blank" className="splash-button">Download CV</a>
                    </div>
            </div>
        </div>
    )
}

export default Splash
