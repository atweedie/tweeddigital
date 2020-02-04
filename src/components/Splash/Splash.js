import React from 'react';
import Social from '../Social';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Splash = () => {
    return (
        <div className="splash">
            <a name="home"></a>
            <div className="splash-overlay">
                    <div className="splash-content animated fadeInUp">
                        <h1 className="splash-name">Adam Tweedie</h1>
                        <h2 className="splash-title">Full Stack Developer</h2>
                        <img className="splash-img"src="/images/me.jpg" alt="Adam Tweedie"></img>
                        <Social/>
                        <h4 className="splash-location"><FontAwesomeIcon className="splash-icon" icon="map-marker-alt"/>Manchester, UK</h4>
                    </div>
            </div>
        </div>
    )
}

export default Splash
