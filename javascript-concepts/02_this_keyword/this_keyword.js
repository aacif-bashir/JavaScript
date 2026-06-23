// this is the special keyword that refers to the object that is executing the current function. Its value is determined at the runtime how the function is called, not where it is defined.

// Example 1
const user = {
    name: "aasif",

    greet(){
        console.log(`Got the name ${this.name} by this keyword`);
    }
}

user.greet()


// Example 2
const user1 = {
    name: "Aasif",
    city: "KMR",
    balance: 90000
}
const user2 = {
    name: "Athar",
    city: "Bij",
    balance: 190000
}

function bank(){
    console.log(`Good morning ${this.name}. Your current balance is ${this.balance}`)
}


bank.call(user1)