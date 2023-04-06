import React from 'react';

import './summarylist.css';

function SummaryList({ result }) {
  return (
    <div className={`category ${result.category}`}>
      <div>
        <img src={result.icon} alt="icon" />
        <p>{result.category}</p>
      </div>
      <p className="category-score">
        {result.score} <span>/ 100</span>
      </p>
    </div>
  );
}

export default SummaryList;
