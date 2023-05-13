import React, { useState } from 'react';

const App = () => {
  const [hue, setHue] = useState(0);

  // Create a color using the slider value (0-360)
  const backgroundColor = `hsl(${hue}, 100%, 50%)`;

  // Determine text color based on hue for contrast
  const textColor = hue > 200 && hue < 300 ? 'white' : 'black';

  return (
    <div style={{ backgroundColor, color: textColor, minHeight: '100vh', padding: '20px' }}>
      <input
        type="range"
        min="0"
        max="360"
        value={hue}
        onChange={(e) => setHue(e.target.value)}
        style={{ width: '100%', marginBottom: '20px' }}
      />

      <h1>Hello, Welcome to the Theme Changer Website!</h1>
      <p>Move the slider to change the color theme of the website.</p>
    </div>
  );
};

export default App;
