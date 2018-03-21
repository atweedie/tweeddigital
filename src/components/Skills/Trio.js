import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const Trio = (props) => {
    return (
        <div className="trio">
            <div className="trio-segment">
                <FontAwesomeIcon className="segment-icon" icon="desktop"/>
                <h3 className="segment-title">Frontend</h3>
                <p className="segment-text">My starting point, front end development, is how I first gained interest and skills in the sector. Picking up HTML and CSS from the ground up and moving over to learning JavaScript. These days you will find me tinkering with the latest frameworks like Vue.js or React.js and discovering new features.</p>
            </div>
            <div className="trio-segment">
                <FontAwesomeIcon className="segment-icon" icon="server"/>
                <h3 className="segment-title">Backend</h3>
                <p className="segment-text">A later addition to my skillset was the introduction to some backend languages and frameworks like PHP and .Net. This started out as a support to my front end knowledge but has swiftly grown as I utilised the knowledge and tinkered on other projects. I am now using my JavaScript knowledge learning Node.js.</p>
            </div>
            <div className="trio-segment">
                <FontAwesomeIcon className="segment-icon" icon="cogs"/>
                <h3 className="segment-title">DevOps</h3>
                <p className="segment-text">A skill I have effectively passively picked up is my understanding of a number of development support technologies and services. Git, Vagrant, AWS, Npm, MySQL, GitFlow, Semantic Versioning, CI, CD, Agile, Kanban are just a few examples of systems I have had a hand in: learning, setting up, and maintaining.</p>
            </div>
        </div>
    )
}

export default Trio
