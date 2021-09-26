const getMaxLessThanK = ( n, k ) => {
    let max = 0;
    for ( let a = 1; a <= n; a++ )
        for( let b = a + 1; b <= n; b++ )
            ( ( a & b ) < k && ( a & b ) > max ) && ( max = ( a & b ) )
    return max;
}

// const [ n, k ] = [ 9, 2 ]
// console.log( getMaxLessThanK( n, k ) );
const [ n, k ] = [ 8, 3 ]
console.log( getMaxLessThanK( n, k ) );
