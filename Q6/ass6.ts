// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let whiteSpace :string = "\t \n Mariya khan \t \n"
let withoutSpace : string = "\t \nMariya khan\n\t"
console.log(`Show the name with whitespace : ${whiteSpace}`);
console.log(`Show the name with withoutspace : ${withoutSpace.trim()}`);




