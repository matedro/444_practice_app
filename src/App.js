import React from 'react';
import boring from './boring.jpg';
import './App.css';

function App() {
  let imgStyle = {
    maxWidth: "40%"
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          International Pencil Pushers Conference<br/>
          Boring, Oregon, USA<br/>
          May 6, 2020
        </p>
        <img src={boring} style={imgStyle} className="Boring" alt="Boring, Oregon" />
        <p>
          Please register with the button below.
        </p>
        <button>
          Register
        </button>
      </header>
    </div>
  );
}

export default App;
