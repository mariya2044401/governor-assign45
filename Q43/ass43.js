// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magician) {
    for (var i = 0; i < magician.length; i++) {
        console.log(magician[i]);
        console.log(magician[i] + ' ' + "The Great");
    }
}
var magicianName = ["Alice", "David", "Chris"];
show_magicians(magicianName);
// show_magicians(magician) //shows the modifies name