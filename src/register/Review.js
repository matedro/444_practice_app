import React from 'react';
import { useHistory } from 'react-router-dom';

function SubmitButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/registrationComplete/");
  }

  return (
    <button type="button" onClick={handleClick}>
      Submit
    </button>
  )
}

class Review extends React.Component {
  constructor(props) {
    super(props);

    this.handleReEdit = this.handleReEdit.bind(this);
  }

  handleReEdit() {
    this.props.handleReview(false);
  }

  render() {
    const info = this.props.info;
    return (
      <div>
        <h2>Please review the information for correctness.</h2>
        <br/>
        <label>
          {info.firstName} {info.lastName}
        </label>
        <br/>
        <label>
          {info.street1}
        </label>
        <br/>
        <label>
          {info.street2}
        </label>
        <br/>
        <label>
          {info.city}, {info.state} {info.zipCode}
        </label>
        <br/>
        <label>
          {info.affiliation}
        </label>
        <br/>
        <label>
          {info.occupation}
        </label>
        <br/>
        <label>
          {info.paymentMethod}
        </label>
        <button type="button" onClick={this.handleReEdit}>
          Go Back
        </button>
        <SubmitButton />
      </div>
    )
  }
}

export default Review;
