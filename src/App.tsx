import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [name, setName] = useState('Nich');

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          <code data-testid='canary'>{name}'s portfolio, v2 under construction</code>
        </p>

        <input
          type='text'
          name='name'
          defaultValue=''
          onChange={e => setName(e.target.value)}
        />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
