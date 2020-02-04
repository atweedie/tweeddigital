import React from 'react';

const Placement = ({content}) => {
    return (
        <div className="placement">
            <div className="placement-head">
                <span>
                    <h4 className="placement-title">{content.name}</h4>
                    <i className="placement-position">{content.position}</i>
                </span>
                <span>
                    <h4 className="placement-duration">{content.duration}</h4>
                    <i className="placement-type">{content.type}</i>
                </span>
            </div>
            <ul className="placement-skills">
            {content.skills.map((skill, index) => (
                <li className="placement-skill" key={index}>{skill}</li>
            ))}
            </ul>
        </div>
    )
}

export default Placement;
