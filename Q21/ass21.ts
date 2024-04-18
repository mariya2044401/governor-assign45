// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface item {
    name:string
    price:number
}

//create objects

let book:item ={
name:'ESSENTIAL TYPESCRIPT',
price: 850
}

let car :item ={
    name:"Audi",
    price: 2000000000
}

console.log(`Book name:${book.name} \n price$: $${book.price}`);
console.log(`Car name:${car.name} \n price$: $${car.price}`);














