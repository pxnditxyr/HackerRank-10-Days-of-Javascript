const regexVar = () => /^([ aeiou ]){1}.*\1$/
const re = regexVar();

console.log( re.test( "abcda" ) );
