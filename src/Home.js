import React from 'react';
import boring from './boring.jpg';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let imgStyle = {
      maxWidth: "40%"
    };

    return (
      <div>
        <header className="App-header">
          <p>
            National Pencil Pushers Conference
            <br/>Boring, Oregon
            <br/>May 6, 2020
          </p>
          <img src={boring} style={imgStyle} className="Boring" alt="Boring, Oregon" />
        </header>
        <br/>
        <label>
          Please register with the button below.
        </label>
        <br/>
        <button>
          Register
        </button>
      </div>
    )
  }
}

export default Home;
