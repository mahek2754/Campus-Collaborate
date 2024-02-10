import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [yearOfStudy, setYearOfStudy] = useState('');
  const [techStacks, setTechStacks] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    if (firstName && lastName && yearOfStudy && techStacks) {
      setIsSignedUp(true);
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleYearChange = (e) => {
    setYearOfStudy(e.target.value);
  };

  return (
    <div className={`container ${isSignedUp ? 'success' : ''}`}>
      {!isSignedUp && (
        <div className="form">
          <div className="row">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="row">
            <select
              id="year-of-study"
              value={yearOfStudy}
              onChange={handleYearChange}
            >
              <option value="">Select Year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Tech Stacks"
              value={techStacks}
              onChange={(e) => setTechStacks(e.target.value)}
            />
          </div>
          <div className="rowButton">
            <input type="button" value="Sign up" onClick={handleSignup} />
          </div>
        </div>
      )}
      {isSignedUp && (
        <div className="successMessage">
          Thank you for signing up, {firstName} {lastName}!
        </div>
      )}
    </div>
  );
};

export default Signup;
