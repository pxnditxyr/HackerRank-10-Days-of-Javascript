const getSquareRoot = ( perimeter, area ) => Math.sqrt( Math.pow( perimeter, 2 ) - ( 16 * area ) );

const sides = ( literals, ...expressions ) => {
	const [ area, perimeter ] = expressions;
	const twoS = [ ( perimeter + getSquareRoot( perimeter, area ) ) / 4, ( perimeter - getSquareRoot( perimeter, area ) ) / 4 ];
	return twoS.sort();
}

let s1 = 10;
let s2 = 14;
[ s1, s2 ] = [ s1, s2 ].sort();
const [ x, y ] = sides`The area is: ${ s1 * s2 }.\nThe perimeter is: ${ 2 * ( s1 + s2 ) }.`;
console.log( ( s1 === x ) ? s1 : -1 );
console.log( ( s2 === y ) ? s2 : -1 );
