import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.handleChange(event.target.name, event.target.value);
  }

  handleSubmit(event) {
    this.props.handleReview(true);
  }

  render() {
    return (
      <div>
        <h2>Please fill out this form.</h2>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <br/>
            <input
              name="firstName"
              type="text"
              value={this.props.info.firstName}
              placeholder="First Name"
              onChange={this.handleChange}
            />
            <input
              name="lastName"
              type="text"
              value={this.props.info.lastName}
              placeholder="Last Name"
              onChange={this.handleChange}
            />
          </label>
          <br/>
          <label>
            Address
            <br/>
            <input
              name="street1"
              type="text"
              value={this.props.info.street1}
              placeholder="Address Line 1"
              onChange={this.handleChange}
            />
            <br/>
            <input
              name="street2"
              type="text"
              value={this.props.info.street2}
              placeholder="Address Line 2"
              onChange={this.handleChange}
            />
            <br/>
            <input
              name="city"
              type="text"
              value={this.props.info.city}
              placeholder="City"
              onChange={this.handleChange}
            />
            <select
              name="state"
              value={this.props.info.state}
              onChange={this.handleChange}
            >
              <option value="">State...</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">state Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
            <input
              name="zipCode"
              type="text"
              value={this.props.info.zipCode}
              placeholder="Zip Code"
              onChange={this.handleChange}
            />
          </label>
          <br/>
          <label>
            Contact Information
            <br/>
            <input
              name="email"
              type="text"
              value={this.props.info.email}
              placeholder="Email Address"
              onChange={this.handleChange}
            />
          </label>
          <br/>
          <label>
            Affiliation and Occupation
            <br/>
            <input
              name="affiliation"
              type="text"
              value={this.props.info.affiliation}
              placeholder="School or Company Affiliation"
              onChange={this.handleChange}
            />
            <br/>
            <select
              name="occupation"
              value={this.props.info.occupation}
              onChange={this.handleChange}
            >
              <option value="">Occupation...</option>
              <option value="Undergraduate Student">Undergraduate Student</option>
              <option value="Graduate Student">Graduate Student</option>
              <option value="Professor">Professor</option>
              <option value="Industry Employee">Industry Employee</option>
            </select>
          </label>
          <br/>
          <label>
            Payment
            <br/>
            <select
              name="paymentMethod"
              value={this.props.info.paymentMethod}
              onChange={this.handleChange}
            >
              <option value="">Payment Method...</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="PayPal">PayPal</option>
            </select>
          </label>
          <br/>
          <input type="submit" value="Next" />
        </form>
      </div>
    )
  }
}

export default Register;
