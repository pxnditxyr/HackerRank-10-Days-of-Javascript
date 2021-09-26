const modifyArray = ( nums ) => nums.map( ( current ) => ( current % 2 === 0 ) ? current *= 2 : current *= 3 );

const a = [ 1,2, 3, 4, 5 ]
console.log( modifyArray( a ).toString().split( ',' ).join( ' ' ) );
