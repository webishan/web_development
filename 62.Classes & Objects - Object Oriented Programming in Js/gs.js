class User {
    constructor(name) {
        // invokes the setter
        this.name = name;
    }

    get name(){
        return this.__name;
    }

    set name(value){
        if (value.length < 4){
            console.log("Name is too short.");
            return;
        }
        this.__name = value;
    }
}

let user = new User("John");
console.log(user.name);

user.name = "Ishan";
console.log(user.name)