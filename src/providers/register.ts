import type * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api';
import { registerProvier } from './registerProvider';

function registerCalc(monaco: typeof monacoEditor) {
  const id = 'calc-lan';
  if (!registerCalc.registered) {
    registerCalc.registered = true;
    monaco.languages.register({ id });
    registerProvier(id);
  }
}

registerCalc.registered = false;

export { registerCalc };
