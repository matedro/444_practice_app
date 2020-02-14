# SWEN-444 Practice Webapp: React
A basic React webapp to "register" for the National Pencil Pushers Conference in Boring, Oregon

Matt Robison, Spring 2020

## Requirements

### Homepage
URL: `/`

Reached by initializing the webapp or selecting "Return to Homepage" on the end
page

Contains:
* A photo of the city in which the conference is being held
* A button labeled "Register"

### Form page
URL: `/register/`

Reached by selecting "Register" in the homepage or "Back" on the review page

Contains:
* A form with the following fields:
  * First name
  * Last name
  * Street address (likely as separate fields)
  * Email address
  * School or company affiliation
  * Date of registration
  * Status: `Undergraduate Student`, `Graduate Student`, `Professor`, or
  `Industry Employee`
  * Payment method: `Credit`, `Debit`, or `PayPal`
* Field auditing for appropriate formatting:
  * Length limits
  * Zip code and date
  * Any other audits deemed necessary
* A button labeled "Next"

### Review page
URL: `/register/`

Reached by selecting "Next" on the form page

Contains:
* A display of all information for a final check
* A button labeled "Go Back" which returns to the form page
* A button labeled "Register" which completes the process

### End page
URL: `/registrationComplete/`

Reached by selecting "Register" in the review page

Contains:
* A message saying "Thank you for registering for the National Pencil
Pushers Conference!"
* A button labeled "Return to Home"
