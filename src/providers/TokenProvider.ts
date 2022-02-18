import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { createLexer, TokenMap } from '../common';

function getTokens(input: string) {
  const lexer = createLexer(input);

  // 捕获词法错误
  const errors: number[] = [];
  lexer.removeErrorListeners();
  lexer.addErrorListener({
    syntaxError(_1, _2, _3, charPositionInLine: number) {
      errors.push(charPositionInLine);
    },
  });

  // 获取token流
  const tokens = lexer.getAllTokens();

  console.log(tokens);

  const res: monaco.languages.IToken[] = tokens.map(token => {
    const type = lexer.ruleNames[token.type - 1];

    const typeName = TokenMap[type] || TokenMap.UnexpectedCharacter;
    return {
      scopes: typeName,
      startIndex: token.charPositionInLine,
    };
  });

  // 将捕获到的错误加入res中
  errors.forEach(point => res.push({ scopes: 'error', startIndex: point }));

  return res;
}

function tokenForLine(input: string) {
  const tokens = getTokens(input);

  return { tokens, endState: new State() };
}

class State implements monaco.languages.IState {
  clone(): monaco.languages.IState {
    return new State();
  }
  equals(other: State): boolean {
    return true;
  }
}

export class TokensProviders implements monaco.languages.TokensProvider {
  tokenize(line: string, state: State): monaco.languages.ILineTokens {
    return tokenForLine(line);
  }

  getInitialState(): monaco.languages.IState {
    return new State();
  }
}
