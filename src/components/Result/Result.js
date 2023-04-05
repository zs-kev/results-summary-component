import React from 'react';

import './result.css';

function Result({ finalResult }) {
  return (
    <div className="result-container">
      <h2>Your Result</h2>
      <div>
        <p>{finalResult}</p>
        <p>of 100</p>
      </div>
      <h1>Great</h1>
      <p>
        Your performance exceed 65% of the people conducting the test
        here!
      </p>
    </div>
  );
}

export default Result;
