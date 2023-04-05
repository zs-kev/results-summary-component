import React from 'react';

function SummaryList({ result }) {
  return (
    <div>
      <img src={result.icon} alt="icon" />
      <p>{result.category}</p>
      <p>
        <span>{result.score}</span> / 100
      </p>
    </div>
  );
}

export default SummaryList;
