import React, { useState } from 'react';

const App = () => {
  const [color, setColor] = useState(0);

  // Create a color using the slider value (0-255)
  const backgroundColor = `rgb(${color}, ${color}, ${color})`;

  return (
    <div style={{ backgroundColor, minHeight: '100vh', padding: '20px' }}>
      <input
        type="range"
        min="0"
        max="255"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{ width: '100%', marginBottom: '20px' }}
      />

      <h1>Hello, Welcome to the Theme Changer Website!</h1>
      <p>Move the slider to change the color theme of the website.</p>
    </div>
  );
};

export default App;
