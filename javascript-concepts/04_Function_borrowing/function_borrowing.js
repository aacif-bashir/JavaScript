// Function borrowing allows an object to use method that belongs to the another object.

const user1 = {
    name: "Aasif",

    greet(){
        console.log(`Good morning ${this.name}`)
    }
}

const user2 = {
    name: "John"
}

user1.greet.call(user2)