// Generated from src/parser/calc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { NumberContext } from "./calcParser";
import { ParenthesesContext } from "./calcParser";
import { AddOrSubContext } from "./calcParser";
import { MulOrDivContext } from "./calcParser";
import { StartContext } from "./calcParser";
import { ExpressionContext } from "./calcParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `calcParser`.
 */
export interface calcListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `Number`
	 * labeled alternative in `calcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by the `Number`
	 * labeled alternative in `calcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by the `Parentheses`
	 * labeled alternative in `calcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterParentheses?: (ctx: ParenthesesContext) => void;
	/**
	 * Exit a parse tree produced by the `Parentheses`
	 * labeled alternative in `calcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitParentheses?: (ctx: ParenthesesContext) => void;

	/**
	 * Enter a parse tree produced by the `addOrSub`
	 * labeled alternative in `calcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAddOrSub?: (ctx: AddOrSubContext) => void;
	/**
	 * Exit a parse tree produced by the `addOrSub`
	 * labeled alternative in `calcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAddOrSub?: (ctx: AddOrSubContext) => void;

	/**
	 * Enter a parse tree produced by the `mulOrDiv`
	 * labeled alternative in `calcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMulOrDiv?: (ctx: MulOrDivContext) => void;
	/**
	 * Exit a parse tree produced by the `mulOrDiv`
	 * labeled alternative in `calcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMulOrDiv?: (ctx: MulOrDivContext) => void;

	/**
	 * Enter a parse tree produced by `calcParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `calcParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `calcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `calcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
}

