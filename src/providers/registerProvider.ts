import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { HoverProvider } from './HoverProvider';
import { TokensProviders } from './TokenProvider';

const disposeAll = (disposables: monaco.IDisposable[]) => {
  disposables.forEach(item => item.dispose());
};

const registerDispose = (disposables: monaco.IDisposable[]) => ({
  dispose: () => disposeAll(disposables),
});

export const registerProvier = (id: string) => {
  const disposables: monaco.IDisposable[] = [];

  // 注册高亮
  disposables.push(monaco.languages.setTokensProvider(id, new TokensProviders()));
  // 注册hover提示
  disposables.push(monaco.languages.registerHoverProvider(id, new HoverProvider()));

  return registerDispose(disposables);
};
