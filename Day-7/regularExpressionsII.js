const regexVar = () => /^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)\s?[a-zA-Z]+$/;

const s = "Dr#Joseph";
const re = regexVar();
console.log( !!s.match( re ) );
