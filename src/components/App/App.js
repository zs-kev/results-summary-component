import React from 'react';

import './app.css';

import data from '../../data.json';
import Result from '../Result';
import Summary from '../Summary';

function App() {
  const [finalResult, setFinalResult] = React.useState(0);

  React.useEffect(() => {
    let calculatedResult = 0;
    for (const index in data) {
      calculatedResult += data[index].score;
    }
    calculatedResult = Math.floor(calculatedResult / data.length);
    setFinalResult(calculatedResult);
  }, []);

  return (
    <main className="app-container">
      <Result finalResult={finalResult} />
      <Summary results={data} />
    </main>
  );
}

export default App;
