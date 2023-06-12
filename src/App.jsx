import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Button, ButtonAlt } from './App.styles';
import themeStyles from './App.system-styles';

const SomeButton = themeStyles.apply('div', 'SomeButton');

function App() {
  const [count, setCount] = useState(0);
  const color = count % 2 === 0 ? 'red' : 'blue';

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button $color={color} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <ButtonAlt onClick={() => setCount((count) => count + 1)}>count is {count}</ButtonAlt>
        <SomeButton horizontalAlignment="left" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </SomeButton>
        <SomeButton horizontalAlignment="center" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </SomeButton>
        <SomeButton horizontalAlignment="right" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </SomeButton>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
