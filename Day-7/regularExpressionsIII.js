const regexVar = () => /[0-9]+/g;


const re = regexVar();
const s = "102, 1948948 and 1.3 and 4.5";
const r = s.match( re );
for ( const e of r ) {
	console.log( e );
}
