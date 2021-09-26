const getCount = ( objects ) => objects.reduce( ( acc, element ) => element.x === element.y ? acc += 1 : acc, 0 );

const objects = [
    {
        x: 1,
        y: 1,
    },
    {
        x: 2,
        y: 3,
    },
    {
        x: 3,
        y: 3,
    },
    {
        x: 3,
        y: 4,
    },
    {
        x: 4,
        y: 5,
    }
];

console.log( getCount( objects ) );
