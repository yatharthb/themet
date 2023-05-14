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
  <nav className="nav" style={{ background: `radial-gradient(circle, hsl(${color}, 100%, 60%), hsl(${color}, 100%, 70%))`, color: color > 200 && color < 300 ? `hsl(${color}, 100%, 90%)` : `hsl(${color}, 100%, 20%)` }}>
    <h2>Theme Changer</h2>
  </nav>
);

const Skills = ({ color }) => (
  <div className="skills" style={{ background: `radial-gradient(circle, hsl(${color}, 100%, 60%), hsl(${color}, 100%, 70%))`, color: `hsl(${color}, 100%, 30%)`, hover: `hsl(${color}, 100%, 80%)` }}>
    <FontAwesomeIcon className="icon" icon={faPython} size="2x" />
    <FontAwesomeIcon className="icon" icon={faJsSquare} size="2x" />
    <FontAwesomeIcon className="icon" icon={faRust} size="2x" />
    <FontAwesomeIcon className="icon" icon={faReact} size="2x" />
    <FontAwesomeIcon className="icon" icon={faSwift} size="2x" />
    <FontAwesomeIcon className="icon" icon={faJava} size="2x" />
    <FontAwesomeIcon className="icon" icon={faLinux} size="2x" />
    <FontAwesomeIcon className="icon" icon={faNodeJs} size="2x" />
    <FontAwesomeIcon className="icon" icon={faAngular} size="2x" />
    <FontAwesomeIcon className="icon" icon={faHtml5} size="2x" />
    <FontAwesomeIcon className="icon" icon={faCss3Alt} size="2x" />
  </div>
);

const Footer = ({ color }) => (
  <footer className="footer" style={{ background: `radial-gradient(circle, hsl(${color}, 100%, 60%), hsl(${color}, 100%, 70%))`, color: color > 200 && color < 300 ? `hsl(${color}, 100%, 90%)` : `hsl(${color}, 100%, 20%)`  }}>
    <p>© 2023 Theme Changer. All rights reserved.</p>
  </footer>
);

const App = () => {
  const [hue, setHue] = useState(0);

  const backgroundColor = `radial-gradient(circle, hsl(${hue}, 100%, 70%), hsl(${hue}, 100%, 80%))`;
  const darkerBackgroundColor = `hsl(${hue}, 100%, 70%)`; 
  const textColor = hue > 200 && hue < 300 ? `hsl(${hue}, 100%, 90%)` : `hsl(${hue}, 100%, 20%)`;
  const sliderThumbColor = `hsl(${hue}, 100%, 50%)`;

  const updateSliderThumbColor = (event) => {
    event.target.style.setProperty('--thumb-color', sliderThumbColor,     'important');
    setHue(event.target.value);
  }

  return (
    <div className="app" style={{ background: backgroundColor, color: textColor, minHeight: '100vh', padding: '20px' }}>
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

      <h1 className="title">Welcome to the Theme Changer Website!</h1>

      <button className="button" style={{ background: `radial-gradient(circle, ${darkerBackgroundColor}, hsl(${hue}, 100%, 60%))`, color: textColor }}>
        Click me
      </button>

      <div className="card" style={{ background: `radial-gradient(circle, ${darkerBackgroundColor}, hsl(${hue}, 100%, 60%))`, color: textColor }}>
        <h2>I'm a card</h2>
        <p>This is some text inside a card.</p>
      </div>

      <h2 className="skills-title">My Skills:</h2>
      <Skills color={hue} />

      <Footer color={hue} />
    </div>
  );
};

export default App;

