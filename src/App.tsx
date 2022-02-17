import React from 'react';
import logo from './logo.svg';
import './App.css';
import MonacoEditor from 'react-monaco-editor';

function App(): JSX.Element {
  return (
    <div>
      <MonacoEditor width={800} height={600} language="javascript" theme="vs-dark" />
    </div>
  );
}

export default App;
