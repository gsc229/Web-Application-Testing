import React, { useState } from 'react';
import DashBoard from './components/Dashboard';
import Display from './components/Display';
import './App.css';

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  return (
    <div className='App'>
      <h1>Baseball Score Board</h1>
      <Display balls={balls} strikes={strikes} />
      <DashBoard
        setStrikes={setStrikes}
        setBalls={setBalls}
        strikes={strikes}
        balls={balls}
      />
    </div>
  );
}

export default App;
