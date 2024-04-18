
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


let guestList :string[] =['Kamran Tessori','Asif zardari' ,'Maryam nawaz']

let canNotAtend:string ="Maryam nawaz"
console.log(canNotAtend+' '+ 'cannot make it ,for Dinner');

// //REplace the guest
let newGuest:string ="Hamza salim "
guestList[guestList.indexOf(canNotAtend)] =newGuest

//Add three more people begining
guestList.unshift('Iqra','Adam','Azlan')
console.log(guestList)

// //middle guest list
let middleGuest :string ="Faisal abbas shabbir"
let middleIndex :number = guestList.length/3
guestList.splice(middleIndex,0,middleGuest)
console.log(guestList)



//add two new guest
guestList.push('Haya','Fatima')
console.log(guestList)

//new invitati0n
// console.log(guestList);

guestList.map(guestList =>{
console.log(`Respected Dear ${guestList} \n You Are Invited To a Dinner.\n Thank You!`)})






