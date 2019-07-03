import React from 'react';


class Form extends React.Component {
  render() {

    return (
      <form action="" id="userForm">
        <label for="firstName" classname="label">First Name</label>
        <input type="text" classname="form-input" id="firstName" placeholder="Jane" required/>

        <label for="lastName" classname="label">Last Name</label>
        <input type="text" classname="form-input" id="lastName" placeholder="Citizen" required/>

        <label for="email" classname="label">E-mail</label>
        <input type="text" classname="form-input" id="email" placeholder="example@domain.com" required/>

        <div>
          <h3>Birthdate</h3>
          <label for="birthDay" classname="label">Day</label>
          <input type="number" classname="form-input" id="birthDay" placeholder="24" min="1" max="31" required/>

          <label for="birthMonth" classname="label">Month</label>
          <input type="number" classname="form-input" id="birthMonth" placeholder="5" min="1" max="12" required/>

          <label for="birthYear" classname="label">Year</label>
          <input type="number" classname="form-input" id="birthYear" placeholder="1975" required/>
        </div>

        <button type="submit">Submit Form</button>
      </form>
    )
  }
}

export default Form;