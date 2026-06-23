// call() method invokes function immediately and allows us to explicitly set the value of this along with its individual arguments
// syntax functionName(thisArg, arg1, arg2, ...)


const user1 = {
    name: "Aasif",
    balance: 3902
}

const user2 = {
    name: "ayan",
    balance: 2333
}

function greet(city, country){
    console.log(`Good morning ${this.name} from ${city} ${country}`)
}

greet.call(user1,"Kashmir", "India")
greet.call(user2,"Delhi", "India")