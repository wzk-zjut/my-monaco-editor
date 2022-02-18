import React from 'react';
import './App.css';
import MonacoEditor from 'react-monaco-editor';
import { registerCalc } from './providers/register';

function App(): JSX.Element {
  return (
    <div className="App">
      <MonacoEditor
        width={800}
        height={600}
        options={{
          fontSize: 20,
        }}
        language="calc-lan"
        editorWillMount={monaco => {
          monaco.editor.defineTheme('my-theme', {
            base: 'vs-dark',
            inherit: true,
            colors: {},
            rules: [
              {
                token: 'operator',
                foreground: '#99CCFF',
              },
              {
                token: 'keyword',
                foreground: '#CC00FF',
              },
              {
                token: 'error',
                fontStyle: 'bold',
                foreground: '#ff0000',
              },
            ],
          });
          registerCalc(monaco);
        }}
        theme="my-theme"
      />
    </div>
  );
}

export default App;
