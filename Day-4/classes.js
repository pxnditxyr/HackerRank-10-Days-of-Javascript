class Polygon {
    constructor ( polygonLength ) {
        this.polygonLength = polygonLength;
    }

    perimeter () {
        return this.polygonLength.reduce( ( acc, element ) => acc + element );
    }
}

const triangle = new Polygon([ 3, 4, 5 ]);
const rectangle = new Polygon([ 10, 20, 10, 20 ]);
const square = new Polygon([ 10, 10, 10, 10 ]);
const pentagon = new Polygon([ 10, 20, 30, 40, 43 ]);

console.log(triangle.perimeter());
console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
