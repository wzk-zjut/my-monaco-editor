// Generated from src/parser/calc.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from 'antlr4ts/Lexer';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
import { NotNull, Override } from 'antlr4ts/Decorators';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

export class calcLexer extends Lexer {
  public static readonly ADD = 1;
  public static readonly SUB = 2;
  public static readonly MUL = 3;
  public static readonly DIV = 4;
  public static readonly EQUAL = 5;
  public static readonly OpenParen = 6;
  public static readonly CloseParen = 7;
  public static readonly NUMBER = 8;
  public static readonly WhiteSpaces = 9;
  public static readonly LineTerminator = 10;

  // tslint:disable:no-trailing-whitespace
  public static readonly channelNames: string[] = ['DEFAULT_TOKEN_CHANNEL', 'HIDDEN'];

  // tslint:disable:no-trailing-whitespace
  public static readonly modeNames: string[] = ['DEFAULT_MODE'];

  public static readonly ruleNames: string[] = [
    'ADD',
    'SUB',
    'MUL',
    'DIV',
    'EQUAL',
    'OpenParen',
    'CloseParen',
    'NUMBER',
    'WhiteSpaces',
    'LineTerminator',
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'+'",
    "'-'",
    "'*'",
    "'/'",
    "'='",
    "'('",
    "')'",
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    'ADD',
    'SUB',
    'MUL',
    'DIV',
    'EQUAL',
    'OpenParen',
    'CloseParen',
    'NUMBER',
    'WhiteSpaces',
    'LineTerminator',
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    calcLexer._LITERAL_NAMES,
    calcLexer._SYMBOLIC_NAMES,
    []
  );

  // @Override
  // @NotNull
  get vocabulary(): Vocabulary {
    return calcLexer.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  constructor(input: CharStream) {
    super(input);
    this._interp = new LexerATNSimulator(calcLexer._ATN, this);
  }

  // @Override
  get grammarFileName(): string {
    return 'calc.g4';
  }

  // @Override
  get ruleNames(): string[] {
    return calcLexer.ruleNames;
  }

  // @Override
  get serializedATN(): string {
    return calcLexer._serializedATN;
  }

  // @Override
  get channelNames(): string[] {
    return calcLexer.channelNames;
  }

  // @Override
  get modeNames(): string[] {
    return calcLexer.modeNames;
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\f8\b\x01\x04' +
    '\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04' +
    '\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x03' +
    '\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03' +
    "\x07\x03\b\x03\b\x03\t\x05\t'\n\t\x03\t\x06\t*\n\t\r\t\x0E\t+\x03\n\x06" +
    '\n/\n\n\r\n\x0E\n0\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x02\x02\x02\f\x03' +
    '\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t' +
    '\x11\x02\n\x13\x02\v\x15\x02\f\x03\x02\x05\x03\x022;\x06\x02\v\v\r\x0E' +
    '""\xA2\xA2\x05\x02\f\f\x0F\x0F\u202A\u202B\x02:\x02\x03\x03\x02\x02' +
    '\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02' +
    '\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02' +
    '\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02' +
    '\x03\x17\x03\x02\x02\x02\x05\x19\x03\x02\x02\x02\x07\x1B\x03\x02\x02\x02' +
    '\t\x1D\x03\x02\x02\x02\v\x1F\x03\x02\x02\x02\r!\x03\x02\x02\x02\x0F#\x03' +
    '\x02\x02\x02\x11&\x03\x02\x02\x02\x13.\x03\x02\x02\x02\x154\x03\x02\x02' +
    '\x02\x17\x18\x07-\x02\x02\x18\x04\x03\x02\x02\x02\x19\x1A\x07/\x02\x02' +
    '\x1A\x06\x03\x02\x02\x02\x1B\x1C\x07,\x02\x02\x1C\b\x03\x02\x02\x02\x1D' +
    '\x1E\x071\x02\x02\x1E\n\x03\x02\x02\x02\x1F \x07?\x02\x02 \f\x03\x02\x02' +
    '\x02!"\x07*\x02\x02"\x0E\x03\x02\x02\x02#$\x07+\x02\x02$\x10\x03\x02' +
    "\x02\x02%'\x07/\x02\x02&%\x03\x02\x02\x02&'\x03\x02\x02\x02')\x03\x02" +
    '\x02\x02(*\t\x02\x02\x02)(\x03\x02\x02\x02*+\x03\x02\x02\x02+)\x03\x02' +
    '\x02\x02+,\x03\x02\x02\x02,\x12\x03\x02\x02\x02-/\t\x03\x02\x02.-\x03' +
    '\x02\x02\x02/0\x03\x02\x02\x020.\x03\x02\x02\x0201\x03\x02\x02\x0212\x03' +
    '\x02\x02\x0223\b\n\x02\x023\x14\x03\x02\x02\x0245\t\x04\x02\x0256\x03' +
    '\x02\x02\x0267\b\v\x02\x027\x16\x03\x02\x02\x02\x06\x02&+0\x03\x02\x03' +
    '\x02';
  public static __ATN: ATN;
  static get _ATN(): ATN {
    if (!calcLexer.__ATN) {
      calcLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(calcLexer._serializedATN));
    }

    return calcLexer.__ATN;
  }
}
