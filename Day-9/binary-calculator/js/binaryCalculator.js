const btnEql = document.querySelector( "#btnEql" );
const operatorAction = ( values ) => { document.querySelector( "#res" ).insertAdjacentHTML( "beforeend", values.target.innerHTML ); }

document.querySelector( "#btnSum" ).onclick = operatorAction;
document.querySelector( "#btnMul" ).onclick = operatorAction;
document.querySelector( "#btnDiv" ).onclick = operatorAction;
document.querySelector( "#btnSub" ).onclick = operatorAction;
document.querySelector( "#btn0" ).onclick   = operatorAction;
document.querySelector( "#btn1" ).onclick   = operatorAction;
document.querySelector( "#btnClr" ).onclick = () => { ( document.querySelector( "#res" ).innerHTML ) = ""; };

const getOperator = ( myExpression ) => myExpression.split(/[^-+*/]/g).join("");
const getOperands = ( myExpression ) => myExpression.split(/[-+*/]/g).filter(String);
btnEql.onclick = () => {
	const answer    = res.innerHTML;
	const operands  = getOperands( answer );
	if ( operands.length < 2 )
		return;
	const operator  = getOperator( answer );
	const parsed    = Math.floor( eval( parseInt( operands[ 0 ], 2 ) + operator + parseInt( operands[ 1 ], 2 ) ) );
	res.innerHTML   = parsed.toString( 2 );
}
