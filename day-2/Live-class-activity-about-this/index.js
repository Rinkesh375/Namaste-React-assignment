const obj = {
    name:"Rinkesh",
    age:25,
    test(){
       return this
    }
}

console.log(obj.test.call()) //Guess the output
console.log(obj.test.call(this)) //Guess the output