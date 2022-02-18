// Generated from src/parser/calc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { calcListener } from "./calcListener";
import { calcVisitor } from "./calcVisitor";


export class calcParser extends Parser {
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
	public static readonly RULE_start = 0;
	public static readonly RULE_expression = 1;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "expression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'+'", "'-'", "'*'", "'/'", "'='", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ADD", "SUB", "MUL", "DIV", "EQUAL", "OpenParen", "CloseParen", 
		"NUMBER", "WhiteSpaces", "LineTerminator",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(calcParser._LITERAL_NAMES, calcParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return calcParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "calc.g4"; }

	// @Override
	public get ruleNames(): string[] { return calcParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return calcParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(calcParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, calcParser.RULE_start);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 4;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, calcParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 12;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case calcParser.NUMBER:
				{
				_localctx = new NumberContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 7;
				this.match(calcParser.NUMBER);
				}
				break;
			case calcParser.OpenParen:
				{
				_localctx = new ParenthesesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 8;
				this.match(calcParser.OpenParen);
				this.state = 9;
				(_localctx as ParenthesesContext)._inner = this.expression(0);
				this.state = 10;
				this.match(calcParser.CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 28;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 26;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
					case 1:
						{
						_localctx = new AddOrSubContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddOrSubContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, calcParser.RULE_expression);
						this.state = 14;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 15;
						(_localctx as AddOrSubContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === calcParser.ADD || _la === calcParser.SUB)) {
							(_localctx as AddOrSubContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 16;
						(_localctx as AddOrSubContext)._right = this.expression(0);
						this.state = 17;
						(_localctx as AddOrSubContext)._operator = this.match(calcParser.EQUAL);
						this.state = 18;
						(_localctx as AddOrSubContext)._res = this.expression(3);
						}
						break;

					case 2:
						{
						_localctx = new MulOrDivContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulOrDivContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, calcParser.RULE_expression);
						this.state = 20;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 21;
						(_localctx as MulOrDivContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === calcParser.MUL || _la === calcParser.DIV)) {
							(_localctx as MulOrDivContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 22;
						(_localctx as MulOrDivContext)._right = this.expression(0);
						this.state = 23;
						(_localctx as MulOrDivContext)._operator = this.match(calcParser.EQUAL);
						this.state = 24;
						(_localctx as MulOrDivContext)._res = this.expression(2);
						}
						break;
					}
					}
				}
				this.state = 30;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);

		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\f\"\x04\x02\t" +
		"\x02\x04\x03\t\x03\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x03\x0F\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\x1D\n" +
		"\x03\f\x03\x0E\x03 \v\x03\x03\x03\x02\x02\x03\x04\x04\x02\x02\x04\x02" +
		"\x02\x04\x03\x02\x03\x04\x03\x02\x05\x06\x02\"\x02\x06\x03\x02\x02\x02" +
		"\x04\x0E\x03\x02\x02\x02\x06\x07\x05\x04\x03\x02\x07\x03\x03\x02\x02\x02" +
		"\b\t\b\x03\x01\x02\t\x0F\x07\n\x02\x02\n\v\x07\b\x02\x02\v\f\x05\x04\x03" +
		"\x02\f\r\x07\t\x02\x02\r\x0F\x03\x02\x02\x02\x0E\b\x03\x02\x02\x02\x0E" +
		"\n\x03\x02\x02\x02\x0F\x1E\x03\x02\x02\x02\x10\x11\f\x04\x02\x02\x11\x12" +
		"\t\x02\x02\x02\x12\x13\x05\x04\x03\x02\x13\x14\x07\x07\x02\x02\x14\x15" +
		"\x05\x04\x03\x05\x15\x1D\x03\x02\x02\x02\x16\x17\f\x03\x02\x02\x17\x18" +
		"\t\x03\x02\x02\x18\x19\x05\x04\x03\x02\x19\x1A\x07\x07\x02\x02\x1A\x1B" +
		"\x05\x04\x03\x04\x1B\x1D\x03\x02\x02\x02\x1C\x10\x03\x02\x02\x02\x1C\x16" +
		"\x03\x02\x02\x02\x1D \x03\x02\x02\x02\x1E\x1C\x03\x02\x02\x02\x1E\x1F" +
		"\x03\x02\x02\x02\x1F\x05\x03\x02\x02\x02 \x1E\x03\x02\x02\x02\x05\x0E" +
		"\x1C\x1E";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!calcParser.__ATN) {
			calcParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(calcParser._serializedATN));
		}

		return calcParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calcParser.RULE_start; }
	// @Override
	public enterRule(listener: calcListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: calcListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calcVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calcParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class NumberContext extends ExpressionContext {
	public NUMBER(): TerminalNode { return this.getToken(calcParser.NUMBER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: calcListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: calcListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calcVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesesContext extends ExpressionContext {
	public _inner!: ExpressionContext;
	public OpenParen(): TerminalNode { return this.getToken(calcParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(calcParser.CloseParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: calcListener): void {
		if (listener.enterParentheses) {
			listener.enterParentheses(this);
		}
	}
	// @Override
	public exitRule(listener: calcListener): void {
		if (listener.exitParentheses) {
			listener.exitParentheses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calcVisitor<Result>): Result {
		if (visitor.visitParentheses) {
			return visitor.visitParentheses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddOrSubContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public _res!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public EQUAL(): TerminalNode { return this.getToken(calcParser.EQUAL, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(calcParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(calcParser.SUB, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: calcListener): void {
		if (listener.enterAddOrSub) {
			listener.enterAddOrSub(this);
		}
	}
	// @Override
	public exitRule(listener: calcListener): void {
		if (listener.exitAddOrSub) {
			listener.exitAddOrSub(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calcVisitor<Result>): Result {
		if (visitor.visitAddOrSub) {
			return visitor.visitAddOrSub(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MulOrDivContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public _res!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public EQUAL(): TerminalNode { return this.getToken(calcParser.EQUAL, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(calcParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(calcParser.DIV, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: calcListener): void {
		if (listener.enterMulOrDiv) {
			listener.enterMulOrDiv(this);
		}
	}
	// @Override
	public exitRule(listener: calcListener): void {
		if (listener.exitMulOrDiv) {
			listener.exitMulOrDiv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calcVisitor<Result>): Result {
		if (visitor.visitMulOrDiv) {
			return visitor.visitMulOrDiv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


