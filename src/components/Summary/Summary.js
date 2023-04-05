import React from 'react';

import './summary.css';

import SummaryList from '../SummaryList';
import Button from '../Button';

function Summary({ results }) {
  return (
    <div className="summary-container">
      <h2>Summary</h2>
      {results.map((result) => (
        <SummaryList key={crypto.randomUUID()} result={result} />
      ))}
      <Button />
    </div>
  );
}

export default Summary;
