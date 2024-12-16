// let obj = {
//     a: 1,
//     b: "Ishan"
// }

// console.log(obj)

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;  // set rabbit.[[Prototype]] = animal


class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created...")
    }

    eats(){
        console.log("I am eating")
    }

    jumps(){
        console.log("I am jumping")
    }
}


class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("Object is created and he is a lion...")
    }

    eats(){
        super.eats()
        console.log("I am eating and roaring")
    }
}

let a = new Animal("Bunny");
console.log(a)

let l = new Lion("Shera")
console.log(l)