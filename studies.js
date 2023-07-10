// JAVASCRIPT --> Programing Language , it also used for server side
/*
History : 
    --> Invented by Brendan Eich in 1995 for Netscape
    --> After it was hand overed to ECMA in 1997 , then Mozila Firefox continued to develop

Running Environments : 
    1. Using Console Tab on Web browser
    2. Using Node.js
    3. Using Web page 
*/

// Variables and Console

// var myname = "sridhar" // it is used in old version so , it is not recommended now --> function scope(global scope)
// let age = 23 // it is used in ;atest version to declare a variable --> blocked scope(local scope)
// const dob = "06/12/2000" // it is used to store a constant value , it can't be changed

// console.log(myname)
// console.log(age)
// console.log(dob)
// console.log("Hii...Good Morning")
// console.log(`My Name is ${myname} and My Age is ${age} Then My Date Of Birth is ${dob}`) // Template String

// Datatypes
/*
    1. Number
    2. Bigint
    3. Boolean
    4. String
    5. Null
    6. Undefined
    7. Symbol
    8. Object
    -----> Here Object is an Non-Primitive datatype , Others are Primitive datatype
*/

// 1. Number

// let maxNum = Number.MAX_SAFE_INTEGER
// let minNum = Number.MIN_SAFE_INTEGER
// console.log(maxNum)
// console.log(minNum)

// let num1 = 10 , num2 = 20
// console.log(typeof num1)
// console.log(typeof num2)
// console.log(num1+num2)
// let num3 = 0.5 , num4 = 0.5
// console.log(num3+num4)
// let num = 1e7
// console.log(num)

// 2. Bigint

// let big1 = 2n
// console.log(typeof big1)
// let big2 = 8n
// console.log(typeof big2)
// console.log(big1 + big2)

// 3. Boolean

// let correct = true
// let incorrect = false
// console.log(correct)
// console.log(typeof correct)
// console.log(incorrect)
// console.log(typeof incorrect)

// 4. String

// let str1 = "Hello"
// let str2 = "Everyone"
// console.log(typeof str1)
// console.log(typeof str2)
// console.log(`${str1} ${str2}`)

// 5. Null

// let x = null
// console.log(typeof x)

// 6. Undefined

// let ud = undefined
// console.log(typeof ud)

// 7. Symbol

// let sy = Symbol("hello")
// console.log(typeof sy)
// console.log(sy)

// 8. Object

// let details = {
//     emp_name : "sridhar",
//     emp_age : 23,
//     emp_company : "clarityTTS"
// }
// console.log(typeof details)
// console.log(details)

// Operators

// 1. Assignment Operator

// let a = 10
// console.log(a)
// console.log(a+=10)
// console.log(a-=5)
// console.log(a*=10)
// console.log(a/=5)
// console.log(a%=5)
// console.log(a**=10)

// 2. Arithematic Operator

// let a1 = 10 , a2 = 20
// console.log("+ ==> " +(a1+a2) )
// console.log("- ==> " +(a2-a1))
// console.log("* ==> " +(a1*a2))
// console.log("/ ==> " +(a2/a1))
// console.log("% ==> " +(a2%a1))
// console.log("pre ++ ==> " +(++a1))
// a2++
// console.log("post ++ ==> " +a2)
// console.log("** ==> " +(2**4))

// 3. Comparison Operator

// console.log("== --- " +(10 == 10))
// console.log("!= --- " +(10 != 10))
// console.log("=== --- " +(10 === "10"))
// console.log("!== --- " +(10 !== 5))
// console.log("> --- " +(10 > 5))
// console.log(">= --- " +(10 >= 5))
// console.log("< --- " +(10 < 20))
// console.log("<= --- " +(10 <= 10))

// 4. Logical Operator

// console.log("&& ==> " +(10==10 && 10 < 10))
// console.log("|| ==> " +(10 < 5 || 10 < 20))
// console.log("! ==> " +(!10==10))

// 5. String Operator

// console.log("hello " + "sridhar")

// 6. Conditional Opeartor

// console.log(10<20 ? true : false)

// Type Conversion ---> Implicit and Explicit Conversion

// 1. Implicit Conversion

// --> String Conversion

// console.log("10" + 10) // ---> Number to String
// console.log("10" + true) // ---> Boolean to String
// console.log("10" + null) // ---> Null to String
// console.log("10" + undefined) // ---> Undefined to String

// --> Number Conversion

// console.log("10" + 10) // ---> String to Number
// console.log(true + 1) // ---> Boolean to Number
// console.log(null + 5) // ---> Null to Number
// console.log(" " - 1)

// --> Returns NaN

// console.log("hello" - 10)
// console.log(undefined + 10)

// console.log(Boolean(""))
// console.log(Number(" "))

// console.log(Math.sqrt(16))

// { let a = 20}
// console.log(a) // Error --> a is not defined

// a = 20 // a is considered as global variable
// console.log(a)

// Variable Hoisting

// function factorial(x) {

//     if (x === 0) {
//         return 1;
//     }

//     else {
//         return x * factorial(x - 1);
//     }
// }

// const num = 3;

// if (num > 0) {
//     let result = factorial(num);
//     console.log(`The factorial of ${num} is ${result}`);
// }

// console.log(a);

// a = 10;
// console.log(a);

// var a = 10;

// a = 20;

// console.log(a);

// if(!true){
//     var a = 10;
// }
// else{
//     var a = 20;
// }

// GETTER METHOD

// let objGet = {
//     name : 'sridhar',
//     age : 23,
//     get getProp(){
//         return this.name + "\n" + this.age;
//     }
// };
// console.log(objGet.name);
// console.log(objGet.getProp);

// SETTER METHOD

// let objSet = {
//     name : 'sridhar',
//     age : 23,
//     set setName(name){
//         this.name = name;
//     }
// }
// console.log(objSet.name);
// objSet.setName = 'sathish';
// console.log(objSet.name);


// let stu = {
//     name : 'sridhar'
// };
// Object.defineProperty(stu , "getName" , {get : function(){return this.name}});
// // console.log(stu.name);
// Object.defineProperty(stu , "setName" , {set : function(name){this.name = name}});
// stu.name = 'sathish';
// console.log(stu.name);

// stu.getName = "sathish";
// console.log(stu.getName);

// CONSTRUCTOR FUNCTION

// function Student(){
//     this.name = "sridhar",
//     this.age = 23
// };
// let obj = new Student();
// console.log(obj.name);
// console.log(obj.age);
// console.log(typeof obj);

// function Student(name , age ){
//     this.name = name ,
//     this.age = age 
// };
// let obj = new Student('sridhar' , 23);
// console.log(obj.name);
// console.log(obj.age);
// let obj1 = new Student('sathish' , 24);
// console.log(obj1.name);
// console.log(obj1.age);

// PROTOTYPE

// function Person(name){
//     this.name = name;
// };
// let obj = new Person('sridhar');
// console.log(obj.name);
// Person.prototype.age = 23;
// console.log(obj.age);
// // Person.prototype = {age : 25};
// Person.prototype.age = 25;
// let obj1 = new Person('sathish');
// console.log(obj1.age);

// console.log(Person.prototype);
// console.log(obj1.__proto__);

// ARRAY

// let arr = [1,2,3,4,5];
// console.log(arr);
// let arr1 = new Array();
// arr1.push(5);
// arr1.push(4);
// arr1.push(3);
// arr1.push(2);
// arr1.push(1);
// console.log(arr1);
// let arr2 = new Array(2,4,6,8,10);
// console.log(arr2);

// let x = new Array(5);
// for(i = 0 ; i < 5 ; i++){
//     x[i] = i;
// }
// x[5] = 5;
// console.log(x);

// let arr = ['sridhar' , 'sathish' , 'vimal'];

// Adding Elements In Start and End 

// arr.push('boobalan')
// console.log(arr);
// arr.unshift('gowtham');
// console.log(arr);

// Removing Elements In Start and End

// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);

// Built-In Methods

// let arr = [1,2,3,4,5];
// let arr1 = [6,7,8,9,10];

// console.log(arr.concat(arr1));
// console.log(arr.indexOf(5) , arr.indexOf(2));
// console.log(arr.slice(2));

// let a = ['sridhar' , 'sathish'];
// a.splice(1 , 0 , 'vimal' , 'boobalan')
// console.log(a);
// a.splice(2 , 2);
// console.log(a);
// a.splice(2 , 2 , 'gowtham' , 'chandru');
// console.log(a);

// MULTI-DIMENSIONAL ARRAY

// let arr = [[1,2] , [3,4] , [5,6] , [7,8] , [9,10]];
// console.log(arr);

// let arr = [1,2,3,4,5];
// arr.push(6);
// console.log(arr);

let arr = [["sridhar" , 23] , ["sathish" , 25]];
arr.forEach((value)=>{
    value.forEach((detail)=>{
        console.log(detail);
    })
})

