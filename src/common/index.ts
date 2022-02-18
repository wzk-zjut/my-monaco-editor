import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { calcLexer } from '../parser/calcLexer';
import { calcParser } from '../parser/calcParser';

export const createLexer = (input: string) => {
  const chars = CharStreams.fromString(input);
  return new calcLexer(chars);
};

export const getParser = (input: string) => {
  const lexer = createLexer(input);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new calcParser(tokenStream);
  parser.removeErrorListeners();
  lexer.removeErrorListeners();
  return parser;
};

export const getAST = (input: string) => {
  const parser = getParser(input);
  const ast = parser.start();
  return ast;
};

export const TokenMap: Record<string, string> = {
  ADD: 'operator',
  SUB: 'operator',
  DIV: 'operator',
  MUL: 'operator',
  EQUAL: 'operator',
  OpenParen: 'operator',
  CloseParen: 'operator',
  NUMBER: 'keyword',
  UnexpectedCharacter: '',
};
