// apply() method works similar to call() method, but arguments are passed in array

// Final truth

// apply() was created to solve the problem of passing arrays as arguments before spread operator existed.


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

greet.apply(user1,["Kashmir", "India"])
greet.apply(user2,["Delhi", "India"])


// Modern JS: Where apply() is still used
// 1. 🔥 Legacy / older codebases

// You will still see apply() in:

// old libraries
// older frameworks
// interview questions

// Example:

Math.max.apply(null, [10, 20, 30]);

// 👉 Modern replacement:

Math.max(...[10, 20, 30]);