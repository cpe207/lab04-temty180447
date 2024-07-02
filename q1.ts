function typeChecker(a, b) {
  if (typeof a === typeof b && typeof a === 'string') {
    return "I LOVE YOU";
  }
  if (typeof a !== typeof b) {
    return "NOT MATCHED";
  }
  if (typeof a === typeof b && typeof a === 'number') {
    return a + b;
  }
}

//Test cases 01
const a1 = "Jack";
const b1 = "Rose";
const a2 = 555;
const b2 = 100;
const a3 = "Jack";
const b3 = 100;

console.log(typeChecker(a1, b1));
console.log(typeChecker(a2, b2));
console.log(typeChecker(a3, b3));

module.exports = typeChecker;
