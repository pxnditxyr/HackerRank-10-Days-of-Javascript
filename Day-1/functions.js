// const factorial = ( n ) => {
//     let fact = 1;
//     for ( let i = 1; i <=n; i++ ) {
//         fact *= i;
//     }
//     return fact;
// }

const factorial = ( number ) => ( number === 1 ) ? 1 : factorial( number - 1 ) * number;

// const factorial = ( number ) => {
//     if ( number === 1 )
//         return 1
//     return factorial( number - 1 ) * number;
// }

console.log( factorial( 4 ) );
