// The bind() method does not invokes the function immediately. Instead it returns the new function with the specified value of this permanently bound to it.

const user1 = {
    name: "Aasif",
    balance: 3902
}
const user2 = {
    name: "Ayan",
    balance: 3902
}

function greet(){
    console.log(`Good morning ${this.name}`)
}

const bind1 = greet.bind(user1)
const bind2 = greet.bind(user2)

bind1()  //Good morning Aasif
bind2()  //Good morning Ayan