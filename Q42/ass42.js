// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
//exercise 41
function show_magicians(magician) {
    magician.forEach((magician) => console.log(magician));
}
show_magicians(["Alice", "David", "Chris"]);
function make_great(magician) {
    magician.forEach((magician) => console.log("The Great" + ' ' + magician));
}
make_great(["Alice", "David", "Chris"]);
export {};
//     for(let i=0; i<magician.length; i++){
//        console.log(" The Great"+' '+magician[i])
//     }
// }
// const magicianName: string [] = ["Alice","David","Chris"]
// make_great(magicianName)
// make_great(magician1) //Modifies the original array
// let magician: string [] = ["Alice","David","Chris"]
// function show_magicians(magician:string[]){
// magician.forEach((magician) => console.log(magician))
// }
// show_magicians(magician) //shows the modifies name
