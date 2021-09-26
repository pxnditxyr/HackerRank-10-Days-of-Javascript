class Rectangle {
    constructor ( w, h ) {
        this.h = h;
        this.w = w;
    }
};

Rectangle.prototype.area = function () {
    return this.w * this.h;
}

class Square extends Rectangle {
    constructor ( sides ) {
        super( sides );
        this.h = sides;
        this.w = sides;
    }
}

const rec = new Rectangle( 3, 4 );
const sqr = new Square( 3 );

console.log( rec.area() );
console.log( sqr.area() );
