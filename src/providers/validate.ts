import { CommonTokenStream, Token } from 'antlr4ts';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { createLexer } from '../common';
import { calcParser } from '../parser/calcParser';

const getPositionByToken = (token: Token) => ({
  startLineNumber: token.line,
  startColumn: token.charPositionInLine + 1,
  endLineNumber: token.line,
  endColumn: token.charPositionInLine + (token.text?.length || 0) + 1,
});

export const validate = async (model: monaco.editor.IModel) => {
  let content = '';
  try {
    content = model.getValue();
    console.log(content);
  } catch {
    monaco.editor.setModelMarkers(model, 'ruleLint', []);
    return;
  }

  if (!content.trim()) {
    monaco.editor.setModelMarkers(model, 'ruleLint', []);
    return;
  }

  const lexer = createLexer(content);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new calcParser(tokenStream);
  lexer.removeErrorListeners();
  parser.removeErrorListeners();

  const errors: monaco.editor.IMarkerData[] = [];

  // 收集词法错误和语法错误
  lexer.addErrorListener({
    syntaxError(_1, _2, line, charPositionInLine, msg, _6) {
      errors.push({
        message: msg,
        severity: monaco.MarkerSeverity.Error,
        source: 'validator',
        startLineNumber: line,
        startColumn: charPositionInLine + 1,
        endLineNumber: line,
        endColumn: charPositionInLine + 2,
        code: 'lexer',
      });
    },
  });
  parser.addErrorListener({
    syntaxError(_1, offendingSymbol, _3, _4, msg, _6) {
      if (offendingSymbol) {
        errors.push({
          message: msg,
          severity: monaco.MarkerSeverity.Error,
          source: 'validator',
          code: 'parser',
          ...getPositionByToken(offendingSymbol),
        });
      }
    },
  });
  parser.start();

  return errors;
};
