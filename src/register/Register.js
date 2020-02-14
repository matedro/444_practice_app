import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {
        firstName: '',
        lastName: '',
        street1: '',
        city: '',
        state: '',
        zipCode: '',
        email: '',
        affiliation: '',
        date: '',
        occupation: '',
        paymentMethod: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const validZipCode = /^\d{5}(-\d{4})?$/;
    const validEmailAddress = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const validDate = /^([0]?[1-9]|[1][0-2])[/-]([0]?[1-9]|[1|2][0-9]|[3][0|1])[/-]([0-9]{4}|[0-9]{2})$/;
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'firstName':
        errors.firstName = value.length === 0 ?
          'First name must not be empty.' : '';
        break;
      case 'lastName':
        errors.lastName = value.length === 0 ?
          'Last name must not be empty.' : '';
        break;
      case 'street1':
        errors.street1 = value.length === 0 ?
          'Street address must not be empty.' : '';
        break;
      case 'city':
        errors.city = value.length === 0 ?
          'City must not be empty.' : '';
        break;
      case 'state':
        errors.state = value === '' ?
          'A state must be selected.' : '';
        break;
      case 'zipCode':
        errors.zipCode = validZipCode.test(value) ?
          '' : 'Enter a valid ZIP code.';
        break;
      case 'email':
        errors.email = validEmailAddress.test(value) ?
          '' : 'Enter a valid email address.';
        break;
      case 'affiliation':
        errors.affiliation = value.length === 0 ?
          'Affiliation must not be empty.' : '';
        break;
      case 'date':
        errors.date = validDate.test(value) ?
          '' : 'Date must be formatted as MM/DD/YYYY.';
        break;
      case 'occupation':
        errors.occupation = value === '' ?
          'An occupation must be selected.' : '';
        break;
      case 'paymentMethod':
        errors.paymentMethod = value === '' ?
          'A payment method must be selected.' : '';
        break;
    }
    this.setState({ errors });
    this.props.handleChange(name, value);
  }

  handleSubmit(event) {
    this.props.handleReview(true);
  }

  render() {
    const errors = this.state.errors;
    const errorStyle = {
      color: "red"
    };

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
          {errors.firstName.length > 0 &&
            <div>
              <span style={errorStyle}>{errors.firstName}</span>
              <br/>
            </div>
          }
          {errors.lastName.length > 0 &&
            <div>
              <span style={errorStyle}>{errors.lastName}</span>
              <br/>
            </div>
          }
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
            {errors.street1.length > 0 &&
              <div>
                <span style={errorStyle}>{errors.street1}</span>
                <br/>
              </div>
            }
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
              <option value="DC">Washington DC</option>
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
          {errors.city.length > 0 &&
            <div>
              <span style={errorStyle}>{errors.city}</span>
              <br/>
            </div>
          }
          {errors.state.length > 0 &&
            <div>
              <span style={errorStyle}>{errors.state}</span>
              <br/>
            </div>
          }
          {errors.zipCode.length > 0 &&
            <div>
              <span style={errorStyle}>{errors.zipCode}</span>
              <br/>
            </div>
          }
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
          {errors.email.length > 0 &&
            <div>
              <span style={errorStyle}>{errors.email}</span>
              <br/>
            </div>
          }
          <label>
            Birthday
            <br/>
            <input
              name="date"
              type="text"
              value={this.props.info.date}
              placeholder="MM/DD/YYYY"
              onChange={this.handleChange}
            />
          </label>
          <br/>
          {errors.date.length > 0 &&
            <div>
              <span style={errorStyle}>{errors.date}</span>
              <br/>
            </div>
          }
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
            {errors.affiliation.length > 0 &&
              <div>
                <span style={errorStyle}>{errors.affiliation}</span>
                <br/>
              </div>
            }
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
          {errors.occupation.length > 0 &&
            <div>
              <span style={errorStyle}>{errors.occupation}</span>
              <br/>
            </div>
          }
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
          {errors.paymentMethod.length > 0 &&
            <div>
              <span style={errorStyle}>{errors.paymentMethod}</span>
              <br/>
            </div>
          }
          <input type="submit" value="Next" />
        </form>
      </div>
    )
  }
}

export default Register;
