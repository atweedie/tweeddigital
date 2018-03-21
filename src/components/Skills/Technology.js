import React from 'react';

const technologies = [
    {
        name: 'PHP',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie, eros a dictum imperdiet, nunc tortor sodales massa, nec dapibus diam diam vel erat. Etiam mattis ornare porttitor. Morbi maximus rhoncus mi, vitae egestas nisl egestas eget. Aliquam erat volutpat. Curabitur eu lobortis sem. Nulla vitae rutrum augue. In hac habitasse platea dictumst.'
    },
    {
        name: 'React',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie, eros a dictum imperdiet, nunc tortor sodales massa, nec dapibus diam diam vel erat. Etiam mattis ornare porttitor. Morbi maximus rhoncus mi, vitae egestas nisl egestas eget. Aliquam erat volutpat. Curabitur eu lobortis sem. Nulla vitae rutrum augue. In hac habitasse platea dictumst.'
    },
    {
        name: 'HTML',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie, eros a dictum imperdiet, nunc tortor sodales massa, nec dapibus diam diam vel erat. Etiam mattis ornare porttitor. Morbi maximus rhoncus mi, vitae egestas nisl egestas eget. Aliquam erat volutpat. Curabitur eu lobortis sem. Nulla vitae rutrum augue. In hac habitasse platea dictumst.'
    },
    {
        name: 'CSS3',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie, eros a dictum imperdiet, nunc tortor sodales massa, nec dapibus diam diam vel erat. Etiam mattis ornare porttitor. Morbi maximus rhoncus mi, vitae egestas nisl egestas eget. Aliquam erat volutpat. Curabitur eu lobortis sem. Nulla vitae rutrum augue. In hac habitasse platea dictumst.'
    },
    {
        name: 'JavaScript',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie, eros a dictum imperdiet, nunc tortor sodales massa, nec dapibus diam diam vel erat. Etiam mattis ornare porttitor. Morbi maximus rhoncus mi, vitae egestas nisl egestas eget. Aliquam erat volutpat. Curabitur eu lobortis sem. Nulla vitae rutrum augue. In hac habitasse platea dictumst.'
    },
    {
        name: '.NET',
        logo: 'https://seeklogo.com/images/M/microsoft-net-logo-631EFE744A-seeklogo.com.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie, eros a dictum imperdiet, nunc tortor sodales massa, nec dapibus diam diam vel erat. Etiam mattis ornare porttitor. Morbi maximus rhoncus mi, vitae egestas nisl egestas eget. Aliquam erat volutpat. Curabitur eu lobortis sem. Nulla vitae rutrum augue. In hac habitasse platea dictumst.'
    },
]


const Technology = (props) => {
    return(
        <div class="technology">
            {technologies.map((tech, index)=>(
                <div class="technology-segment">
                    <div class="technology-overlay">
                        <img class="technology-logo" src={tech.logo} alt={tech.name}></img>
                        <h3 class="technology-name">{tech.name}</h3>
                    </div>
                    <div class="technology-content">
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Technology;
