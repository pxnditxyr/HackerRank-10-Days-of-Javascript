let arr   = [ 1, 2, 3, 6, 9, 8, 7, 4 ];
let order = [ 1, 2, 3, 6, 9, 8, 7, 4 ];

document.querySelector( "#btn5" ).onclick = () => {
    arr.unshift( arr.pop() );
    for ( let i = 0; i < 8; i++ )
        document.querySelector( "#btn" + order[ i ] ).innerHTML = arr[ i ];
}
