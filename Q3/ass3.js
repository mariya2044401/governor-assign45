// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let person_name = "mariya khan";
console.log(`Capital name: ${person_name.toUpperCase()}`);
console.log(`Small name: ${person_name.toLowerCase()}`);
console.log(`Title name: ${person_name.charAt(0).toUpperCase() + person_name.toLowerCase().slice(1)}`);
export {};
