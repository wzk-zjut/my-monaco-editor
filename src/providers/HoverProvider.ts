import { Token } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { getAST } from '../common';
import { calcListener } from '../parser/calcListener';
import { NumberContext } from '../parser/calcParser';

export class HoverProvider implements monaco.languages.HoverProvider {
  provideHover(model: monaco.editor.IModel, position: monaco.Position) {
    const content = model.getValue();
    const AST = getAST(content || '');
    const finder = new HoverFinder(position);
    ParseTreeWalker.DEFAULT.walk(finder, AST); // 遍历AST
    const { result } = finder;
    if (result.type === 'number') {
      return {
        contents: [
          {
            value: `数字${result.name}`,
          },
        ],
        range: result.range,
      };
    }
    return {
      contents: [],
    };
  }
}

const getRangeFromToken = (input: Token) => {
  const startLineNumber = input.line;
  const startColumn = input.charPositionInLine + 1;
  const length = input.text?.length || 1;
  return new monaco.Range(startLineNumber, startColumn, startLineNumber, startColumn + length);
};
class HoverFinder implements calcListener {
  result?: {
    range: monaco.Range;
    type: string;
    name?: string;
  };
  private position: monaco.Position;
  constructor(position: monaco.Position) {
    this.position = position;
  }

  enterNumber(ctx: NumberContext) {
    if (!this.result) {
      console.log(ctx);
      const range = getRangeFromToken(ctx.start);
      const matched = monaco.Range.containsPosition(range, this.position);
      if (matched) {
        this.result = {
          range,
          type: 'number',
          name: ctx.start.text,
        };
      }
    }
  }

  visitErrorNode() {
    // 为了ts类型正确
  }
}
