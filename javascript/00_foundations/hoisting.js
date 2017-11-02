// A function can be referenced to in the code before it is defined.
// Because function definition is hoisted. Hoisted: To become raised or lifted.
console.info(increment(4));

function increment(n){
    return n+1;
}

// you cannot do the same with classes
// console.info(new Hello().greet());
// ^
//
// ReferenceError: Hello is not defined
console.info(new Hello().greet());

class Hello {
    greet(){
        return "Hello World!";
    }
}