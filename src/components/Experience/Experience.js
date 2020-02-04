import React from 'react';
import Placement from './Placement';

const placements = [
    {
        name: 'BBC',
        position: 'Software Engineer',
        type: 'Full TIme',
        duration: 'June 2018 - Present',
        skills: [
            'Authentication Flow Development',
            'Tooling - Continous Integration',
            'Pair programming / Code Reviews',
            'Mentoring and Skill Sharing',
            'NodeJS, React, OAuth, Docker, AWS',
            'TDD/BDD - Testing and Automation',
        ]
    },
    {
        name: 'Live & Now Ltd',
        position: 'Front End Developer',
        type: 'Full TIme',
        duration: 'June 2017 - March 2018',
        skills: [
            'Web Application Development',
            'Project Management – Agile, Kanban',
            'Source Control / Versioning',
            'Architecture & Design',
            'PHP, React, Javascript/JQuery, CSS/Sass',
            'API – Consumption and Creation',
        ]
    },
    {
        name: 'Hack Oldham',
        position: 'Member/Volunteer',
        type: 'Volunteering & Hobbies',
        duration: 'April 2018 - Present',
        skills: [
            'Mentoring at events (CodeUp, Digital Drop In)',
            'Hosting/Supporting Events (Robotics Meetup, Open Evening)',
            'Attending members meetings',
            'Occasional custodian duties',
            'Personal Projects/Experiments'
        ]
    },
    {
        name: 'Carbay Ltd',
        position: 'Digital Marketing Executive',
        type: 'Full TIme',
        duration: 'June 2014 - May 2017',
        skills: [
            'Managing PPC Campaigns',
            'Developing/Updating web assets',
            'Producing media and content',
            'Analyzing online presence and performance',
            'IT Support',
            'Maintaining digital solutions (Office 365, VOIP,etc)',
        ]
    },
    {
        name: 'Playhouse 2',
        position: 'Member/Volunteer',
        type: 'Volunteering',
        duration: 'September 2010 - Present',
        skills: [
            'Provided support when extra staff needed',
            'Offered technical advice'
        ]
    }
];

const Experience = (props) => {
    return (
        <div id="#experience" className="experience">
            <a name="experience"></a>
            <h2 className="experience-heading">Experience</h2>
            {placements.map((placement, index) =>(
                <Placement content={placement}/>
            ))}
        </div>
    )
}

export default Experience;
