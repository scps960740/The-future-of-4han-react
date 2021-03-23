import logo from './logo.svg';
import './App.css';

import Btn from './Btn'

function App2() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Btn />
      </header>
    </div>
  );
}

export default App2;
