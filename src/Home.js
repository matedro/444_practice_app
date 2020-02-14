import React from 'react';
import { useHistory } from 'react-router-dom';
import boring from './boring.jpg';

function RegisterButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/register/");
  }

  return (
    <button type="button" onClick={handleClick}>
      Register
    </button>
  )
}

class Home extends React.Component {
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
        <RegisterButton />
      </div>
    )
  }
}

export default Home;
