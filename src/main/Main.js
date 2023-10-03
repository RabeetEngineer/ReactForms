import React, { useRef, useState } from "react";
import PasswordErrorMessage from "./PasswordErrorMessage";

const validateEmail = (email) => {
  // Use a regular expression to check for a valid email format
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
};

const getIsFormValid = (firstName, email, password, role) => {
  // Check if the first name is not empty
  const isFirstNameValid = firstName.trim() !== "";

  // Check if the email is not empty and is a valid email address
  const isEmailValid = email.trim() !== "" && validateEmail(email);

  // Check if the password is at least 8 characters long
  const isPasswordValid = password.length >= 8;

  // Check if the role is either "individual" or "business"
  const isRoleValid = role === "individual" || role === "business";

  // Return true if all criteria are met
  return isFirstNameValid && isEmailValid && isPasswordValid && isRoleValid;
};

const Main = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({ value: "", isTouched: false });

  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!getIsFormValid(firstName, email, password.value, role)) {
      alert("Please fill in all required fields correctly.");
      return;
    }

    // Your form submission logic here
    console.log("Form submitted successfully!");
  };
  const handlePasswordBlur = () => {
    setPassword({ ...password, isTouched: true });
  };
  
  const isButtonDisabled = !getIsFormValid(
    firstName,
    email,
    password.value,
    role
  );

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2>Sign Up</h2>
            <div className="field">
              <label htmlFor="">First Name</label> <br />
              <input
                type="text"
                placeholder="First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="">Last Name</label> <br />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="">Email Address</label> <br />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="">Password</label> <br />
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                value={password.value}
                onChange={(e) =>
                  setPassword({ ...password, value: e.target.value })
                }
                onBlur={handlePasswordBlur}
              />
              <PasswordErrorMessage password={password} />
            </div>
            <div className="field">
              <label htmlFor="">Role</label> <br />
              <select
                name=""
                id=""
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="individual">Individual</option>
                <option value="business">Business</option>
              </select>
            </div>
            <div className="field">
              <button type="submit" disabled={isButtonDisabled}>
                Create Account
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Main;
