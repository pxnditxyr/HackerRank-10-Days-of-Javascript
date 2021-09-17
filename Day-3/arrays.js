const getSecondLargest = ( nums ) => {
    let numsSet = [ ...new Set( nums ) ];
    numsSet.sort( (a, b) => a - b );
    return numsSet[ numsSet.length - 2 ];
};

console.log( getSecondLargest([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]) );
