import React from 'react';
import { useHistory } from 'react-router-dom';
import Register from "./register/Register";
import Review from "./register/Review";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      review: false,
      info: {
        firstName: '',
        lastName: '',
        street1: '',
        street2: '',
        city: '',
        state: '',
        zipCode: '',
        email: '',
        affiliation: '',
        occupation: '',
        paymentMethod: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleReview = this.handleReview.bind(this);
  }

  handleChange(name, value) {
    const { info } = { ...this.state };
    const currentState = info;
    currentState[name] = value;
    this.setState({ info: currentState });
  }

  handleReview(value) {
    this.setState({
      review: value
    });
  }

  render() {
    const inReview = this.state.review;
    return (
      <div>
        {inReview ?
          <Review
            info={this.state.info}
            handleReview={this.handleReview}
          /> :
          <Register
            info={this.state.info}
            handleChange={this.handleChange}
            handleReview={this.handleReview}
          />}
      </div>
    )
  }
}

export default RegistrationForm;
