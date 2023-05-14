import React, { useState } from 'react';

const Navbar = ({ color }) => (
  <nav style={{ backgroundColor: `hsl(${color}, 100%, 50%)`, color: color > 200 && color < 300 ? 'white' : 'black', padding: '10px', display: 'flex', justifyContent: 'center' }}>
    <h2 style={{ fontFamily: "'Montserrat', sans-serif" }}>Theme Changer</h2>
  </nav>
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

  return (
    <div style={{ backgroundColor, color: textColor, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <Navbar color={hue} />

      <div className="sliderContainer">
        <style type="text/css">
          {`
          .colorSlider::-webkit-slider-thumb {
            background: ${sliderThumbColor};
          }

          .colorSlider::-moz-range-thumb {
            background: ${sliderThumbColor};
          }

          .colorSlider::-ms-thumb {
            background: ${sliderThumbColor};
          }
          `}
        </style>
        <input
          type="range"
          min="0"
          max="360"
          value={hue}
          onChange={(e) => setHue(e.target.value)}
          className="colorSlider"
        />
      </div>

      <h1 style={{ fontFamily: "'Montserrat', sans-serif", margin: '20px 0' }}>Welcome to the Theme Changer Website!</h1>

      <button style={{ backgroundColor: darkerBackgroundColor, color: textColor, padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontFamily: "'Montserrat', sans-serif", margin: '20px 0' }}>
        Click me
      </button>

          <div style={{ backgroundColor: darkerBackgroundColor, color: textColor, padding: '20px', borderRadius: '10px', fontFamily: "'Montserrat', sans-serif", margin: '20px 0' }}>
        <h2>I'm a card</h2>
        <p>This is some text inside a card.</p>
      </div>

      <Footer color={hue} />
    </div>
  );
};

export default App;
