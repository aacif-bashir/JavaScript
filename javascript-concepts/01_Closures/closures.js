// Closure is the combination of function and the lexical environment in which it was defined. It allows inner function to access and retain the variables of outer function even after the outer function has completed its execution.

// Example 1

function outer(){
    const name = "Aasif"

    function inner(){
        console.log(`I got name ${name} from outer function`)
    }
    return inner
}
const result = outer()

result()

// if we don't store it in variable

outer()()

// Output: I got name Aasif from outer function

// Example 2: counter

function counter(){
    let count = 0

    function start(){
         count++;
        console.log(count)
    }
    return start;
}

const answer = counter()

answer()  // 1
answer()  // 2    // if we don't store it in variable in will print again 1 because the value is not stored.