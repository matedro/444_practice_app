import React from 'react';
import RegistrationForm from './RegistrationForm';
import boring from './boring.jpg';
// import './App.css';

function App() {
  let imgStyle = {
    maxWidth: "40%"
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          National Pencil Pushers Conference
          <br/>Boring, Oregon
          <br/>May 6, 2020
        </p>
        <img src={boring} style={imgStyle} className="Boring" alt="Boring, Oregon" />
        <p>
          Please register with the button below.
        </p>
        <button>
          Register
        </button>
        <RegistrationForm />
      </header>
    </div>
  );
}

export default App;
