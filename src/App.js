import React, { Component } from 'react';
import './App.css';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import solids from '@fortawesome/fontawesome-free-solid';
import Navigation from './components/Navigation';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Splash from './components/Splash/Splash';

fontawesome.library.add(brands, solids)

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <div>
            <div>
                <Navigation/>
                <Splash/>
                <Experience/>
                <Skills/>
            </div>
        </div>
    );
  }
}

export default App;
