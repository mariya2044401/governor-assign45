// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magician:string[]):void{
magician.forEach((magician) => console.log(magician))
}
// let magicianName: string [] = ["Alice","David","Chris"]
// show_magicians(magicianName)
show_magicians(["Alice","David","Chris"])