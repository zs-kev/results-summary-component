import React from 'react';

import './summary.css';

import SummaryList from '../SummaryList';
import Button from '../Button';

function Summary({ results }) {
  return (
    <div className="summary-container">
      <h2>Summary</h2>
      <div>
        {results.map((result) => (
          <SummaryList key={crypto.randomUUID()} result={result} />
        ))}
      </div>
      <Button />
    </div>
  );
}

export default Summary;
