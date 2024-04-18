// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let whiteSpace = "\t \n Mariya khan \t \n";
let withoutSpace = "\t \nMariya khan\n\t";
console.log(`Show the name with whitespace : ${whiteSpace}`);
console.log(`Show the name with withoutspace : ${withoutSpace.trim()}`);
export {};
// let whiteSpace : string="\t\n Mariya khan\n\t";
// let withoutSpace:string='Mariyakhan';
// // console.log(whiteSpace,whiteSpace2) both method used of console
// console.log(`Show the name with whitespace : ${whiteSpace}`)
// console.log(`Show the name with withoutspace : ${withoutSpace.trim()}`)
