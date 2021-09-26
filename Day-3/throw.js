const isPositive = ( a ) => {
    if ( a > 0 )
        return "YES";
    else
        throw a === 0 ? new Error( "Zero Error" ) : new Error( "Negative Error" );
}

console.log( isPositive( 1 ) )
console.log( isPositive( 0 ) )
// console.log( isPositive( -1 ) )
// Always at least one error must be commented
