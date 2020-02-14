import React from 'react';
import { useHistory } from 'react-router-dom';
import RegistrationForm from "./RegistrationForm";

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

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "review": false
    };

    this.handleReview = this.handleReview.bind(this);
    this.handleReEdit = this.handleReEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleReview() {

  }

  handleReEdit() {

  }

  handleSubmit() {

  }

  render() {
    const inReview = this.state.review;
    return (
      <div>
        {inReview ? <label>Unimplemented</label> : <RegistrationForm />}
      </div>
    )
  }
}

export default Register;
