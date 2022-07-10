console.log(2+"2")//22 + is a string and num operator
console.log(2-"2")//0 - is a num operator

///////////////////////////////////
//remove duplicates
let nums=[1,2,3,3,4]

let set = new Set(nums)
console.log([...set])

///////////////////////////////////

let func = function(){
    {
        let l= "let";
        let v="var"
    }

    console.log(l) // l is not defined
    console.log(v)// v is var
}

func()

//to make var unavailable we van define those variables inside a function scope
/////////////////////////

console.log(5<6<7)// true<7 ===>true
console.log(7>6>5)//true>5 ===>false
//////////////////////
let a =()=> arguments
console.log("hi")  //null

function a (){
    return arguments  //"hi"
}

console.log(a("hi"))
////////////////////////////


let xy= function (){
    return 
    {
        message ="hi"
    }

}
console.log(xy()) //return nothing 
//if return and braces are in same line it returns the message

/////////////////////////////////
let profile={
    name:"jaseela"
}
//Object.freeze(profile) ==>to freeze object from adding new property age
//Objetc.seal(profile)   ==>to modify existing properties and block new properties
profile.age=3

console.log(profile)

//now if
let profiles ={
    name:"jaseela",
    age:3
}
//to modify name only

Object.defineProperty(profiles,"age",{value:3,writable:false})
profile.name="jasee"
profile.age=10
console.log(profiles)

///////////////////////////////

console.log(Math.max())//-Infinity that is least value inside the math library

////////////////////////////
let x= function(){
    if(true){
    console.log(v)//undefined due to hoisting
    console.log(l)//not defined
var v =2
let l=1
    }
    console.log(v)//2
    console.log(l)//not defined
}
x()
