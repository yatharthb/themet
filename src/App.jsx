
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faJsSquare,
  faRust,
  faReact,
  faSwift,
  faJava,
  faLinux,
  faNodeJs,
  faAngular,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import './App.css';

const Navbar = ({ color }) => (
  <nav className="nav" style={{ backgroundColor: `hsl(${color}, 100%, 50%)`, color: color > 200 && color < 300 ? 'white' : 'black' }}>
    <h2>Theme Changer</h2>
  </nav>
);
const Skills = ({ color }) => (
  <div className="skills" style={{ backgroundColor: `hsl(${color}, 100%, 70%)`, color: `hsl(${color}, 100%, 30%)` }}>
    <FontAwesomeIcon icon={faPython} size="2x" />
    <FontAwesomeIcon icon={faJsSquare} size="2x" />
    <FontAwesomeIcon icon={faRust} size="2x" />
    <FontAwesomeIcon icon={faReact} size="2x" />
    <FontAwesomeIcon icon={faSwift} size="2x" />
    <FontAwesomeIcon icon={faJava} size="2x" />
    <FontAwesomeIcon icon={faLinux} size="2x" />
    <FontAwesomeIcon icon={faNodeJs} size="2x" />
    <FontAwesomeIcon icon={faAngular} size="2x" />
    <FontAwesomeIcon icon={faHtml5} size="2x" />
    <FontAwesomeIcon icon={faCss3Alt} size="2x" />
  </div>
);


const Footer = ({ color }) => (
  <footer style={{ backgroundColor: `hsl(${color}, 100%, 50%)`, color: color > 200 && color < 300 ? 'white' : 'black', padding: '10px', position: 'fixed', bottom: 0, width: '100%', display: 'flex', justifyContent: 'center' }}>
    <p style={{ fontFamily: "'Montserrat', sans-serif" }}>© 2023 Theme Changer. All rights reserved.</p>
  </footer>
);



const App = () => {
  const [hue, setHue] = useState(0);

  // Create a color using the slider value (0-360)
  const backgroundColor = `hsl(${hue}, 100%, 80%)`;
  const darkerBackgroundColor = `hsl(${hue}, 100%, 70%)`; // Darker color for components

  // Determine text color based on hue for contrast
  const textColor = hue > 200 && hue < 300 ? 'black' : 'white';

  // Determine color of the slider's knob
  const sliderThumbColor = `hsl(${hue}, 100%, 50%)`;

  const updateSliderThumbColor = (event) => {
    // Apply color to thumb
    event.target.style.setProperty('--thumb-color', sliderThumbColor, 'important');
    setHue(event.target.value);
  }

     return (
    <div style={{ backgroundColor, color: textColor, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <Navbar color={hue} />
      <div className="sliderContainer">
        <input
          type="range"
          min="0"
          max="360"
          value={hue}
          onChange={updateSliderThumbColor}
          className="colorSlider"
          style={{
            background: `linear-gradient(90deg, hsl(0, 100%, 50%), hsl(120, 100%, 50%), hsl(240, 100%, 50%), hsl(360, 100%, 50%))`,
            '--webkit-slider-thumb-color': sliderThumbColor
          }}
        />
      </div>

      <h1>Welcome to the Theme Changer Website!</h1>

      <button className="button" style={{ backgroundColor: darkerBackgroundColor, color: textColor }}>
        Click me
      </button>

      <div className="card" style={{ backgroundColor: darkerBackgroundColor, color: textColor }}>
        <h2>I'm a card</h2>
        <p>This is some text inside a card.</p>
      </div>

      <h2>My Skills:</h2>
  <Skills color={hue} />

  <Footer color={hue} />
</div>
);

};

export default App;