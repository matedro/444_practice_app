import React from 'react';
import { useHistory } from 'react-router-dom';

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <button type="button" onClick={handleClick}>
      Return to Home
    </button>
  )
}

class Complete extends React.Component {
  render() {
    return (
      <div>
        <h3>Thank you for registering for the National Pencil Pushers Conference!</h3>
        <br/>
        <HomeButton />
      </div>
    )
  }
}

export default Complete;
