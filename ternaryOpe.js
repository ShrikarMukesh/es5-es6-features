var age = 26;
var beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"

let greeting = (person) => {
  let name = person ? person.name : `stranger`;
  return `Howdy, ${name}`;
};

console.log(greeting({ name: `Alice` })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"
