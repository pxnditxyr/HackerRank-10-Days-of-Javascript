const getDayName = ( dateString ) => 
    [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ][ ( new Date( dateString ) ).getDay() ];

//const date = "10/11/2009";
//console.log( new Date( date ).getDay() )
const date = "11/10/2010";
console.log( getDayName( date ) );
