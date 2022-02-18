// Generated from src/parser/calc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { NumberContext } from "./calcParser";
import { ParenthesesContext } from "./calcParser";
import { AddOrSubContext } from "./calcParser";
import { MulOrDivContext } from "./calcParser";
import { StartContext } from "./calcParser";
import { ExpressionContext } from "./calcParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `calcParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface calcVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `Number`
	 * labeled alternative in `calcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by the `Parentheses`
	 * labeled alternative in `calcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParentheses?: (ctx: ParenthesesContext) => Result;

	/**
	 * Visit a parse tree produced by the `addOrSub`
	 * labeled alternative in `calcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddOrSub?: (ctx: AddOrSubContext) => Result;

	/**
	 * Visit a parse tree produced by the `mulOrDiv`
	 * labeled alternative in `calcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulOrDiv?: (ctx: MulOrDivContext) => Result;

	/**
	 * Visit a parse tree produced by `calcParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `calcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
}

