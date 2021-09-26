function Rectangle ( a, b ) {
    this.length = a;
    this.width  = b;
    this.area   = a * b;
    this.perimeter = 2 * ( a + b );
}

const rec = new Rectangle( 4, 5 );
console.log( rec.length );
console.log( rec.width );
console.log( rec.perimeter );
console.log( rec.area );
