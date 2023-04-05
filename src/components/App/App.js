import React from 'react';

import './app.css';

import { DataApi } from '../../api';
import Result from '../Result';
import Summary from '../Summary';

function App() {
  const [results, setResults] = React.useState();
  const [finalResult, setFinalResult] = React.useState(0);
  const [status, setStatus] = React.useState('idle');

  React.useEffect(() => {
    async function getData() {
      setStatus('loading');
      const allResults = await DataApi();

      if (!allResults.success) {
        setStatus('error');
      } else {
        setStatus('success');
        setResults(allResults.data);
        calculateFinalResult(allResults.data);
      }
    }

    function calculateFinalResult(resultList) {
      let calculatedResult = 0;
      for (const index in resultList) {
        calculatedResult += resultList[index].score;
      }
      calculatedResult = Math.floor(
        calculatedResult / resultList.length
      );
      setFinalResult(calculatedResult);
    }

    getData();
  }, []);

  return (
    <main className="app-container">
      {status === 'idle' && <p>No results found</p>}
      {status === 'loading' && <p>Getting results...</p>}
      {status === 'error' && <p>Something went wrong</p>}
      {status === 'success' && (
        <>
          <Result finalResult={finalResult} />
          <Summary results={results} />
        </>
      )}
    </main>
  );
}

export default App;
