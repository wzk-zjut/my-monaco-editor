grammar calc;

/* 词法定义 */
ADD: '+';
SUB: '-';
MUL: '*';
DIV: '/';
EQUAL: '=';
OpenParen: '(';
CloseParen: ')';
NUMBER: '-'? [0-9]+;
WhiteSpaces: [\t\u000B\u000C\u0020\u00A0]+ -> channel(HIDDEN);
LineTerminator: [\r\n\u2028\u2029] -> channel(HIDDEN);

/* 语法定义 */

start: expression;
expression:
	NUMBER																							# Number
	| OpenParen inner = expression CloseParen														# Parentheses
	| left = expression operator = (ADD | SUB) right = expression operator = EQUAL res = expression	#
		addOrSub
	| left = expression operator = (MUL | DIV) right = expression operator = EQUAL res = expression #
		mulOrDiv;