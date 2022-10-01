//--------
//Array of objects
//--------

//Mutation
// const arr = [1, 2, 3, 4, 5];

// //add new data into original data

// arr.push(6);

// arr.pop();

// arr.shift();

// console.log(arr);

//------
//Array methods
//------

//1. ForEach();

// const students = [
//   { name: "John", age: 20 },
//   { name: "Mary", age: 26 },
//   { name: "Peter", age: 22 },
//   { name: "Sally", age: 23 },
// ];

// students.forEach(user => {
//   console.log("name", user.name);
//   console.log("age", user.age);
// });

//1. map();

// const newStudents = students.map(user => {
//   return user.name;
// });

// newStudents.push("Emmanuel");
// console.log(newStudents);
// console.log(students);

//1. filter();
// const students = [
//   { name: "John", age: 20, debt: false },
//   { name: "Mary", age: 26, debt: false },
//   { name: "Peter", age: 22, debt: true },
//   { name: "Sally", age: 23, debt: true },
// ];

// const debtStudents = students.filter(student => {
//   return student.age < 26;
// });

// // console.log(debtStudents);

// //1. reduce();
// const products = [
//     { name: "banana", price: 1 },
//     { name: "orange", price: 2 },
//     { name: "apple", price: 3 },
//     { name: "pear", price: 4 },
//   ];

//   const sum = products.reduce(function (total, product) {
//     return total + product.price;
//   }, 0);

//   console.log(sum);


// var fnName = function (str, n) {
//     return 'a' > '1';
// }
// let result = fnName('gsdf', 2);
// console.log(result);

// const arr = [2, 4];

// arr.reduce(function (acc, currVal, currIdx, arr) {
//     // console.log(`acc ${acc}`);
//     // console.log(`currval ${currVal}`);
//     // console.log(`currindex ${currIdx}`);
//     // console.log(`array ${arr}`);
//     console.log(acc + currVal);
// },)




// const reduce = arri.reduce(function (acc, currVal) {
//     return acc + currVal + currVal;
// }, 0);

// const find = arri.find(function(elements){
//     return elements>4;
// })

// const filter = arri.filter(function(element){
//     return element> 2;
// })

// const tail = arri.reduce(function(acc, currv){
//     return acc+currv;
// }, 0)
// console.log(tail)

// function take(arr){
//     let ans = 0;
//     for(let i = 0; i < arr.length; i++){
//         ans+=arr[i];
//     }
//     return ans
// }
// console.log(take(arri))


// const arri = [2,2,4,5,4,5,6,7];

// function duplicateRem(arr){
//     const filteredData = arr.filter(function(el, idx, arr){
//         console.log(arr.indexOf(el));
//         return arr.indexOf(el) === idx;
//     })
//     return filteredData
// }

// console.log(duplicateRem(arri));


// function duprem(arr){
//     let array = [];
//     for(let i = 0; i < arr.length ; i++){
//         let yoyo = array.find(function(element){
//             return element === arr[i];
//         })
//         console.log(yoyo)
//         if(!yoyo){
//             array.push(arr[i])
//         }
//     }
//     return array;
// }
// console.log(duprem(arri));


// const words = ["appy","ace","shu","siip","34"];

// function sep(words){
//     const ans = words.filter(function(element){
//         return element.length<=3;
//     })
//     return ans;
// }
// console.log(sep(words));

// const ans = Math.round(10*Math.random())
// console.log(ans)

// clog

// const person = {
//     name: 'johny',
//     salary: 45452,
//     hobby: ['dance', 'cooking'],
//     isStatus: false,
//     checkStatus: function () { console.log(`shut up ${this.name} worth $${this.salary}`) },
//     delet: function () {
//         if (!this.isStatus) {
//             this.hobby.push("bitches");
//         }
//         else {
//             console.log('bitches');
//         }
//     }
// };

// for(let key in person){
// //     console.log(key);
// // }

// // let keys_array = Object.keys(person);
// // console.log(keys_array);

// // keys_array.forEach(function(element){
// //     console.log(element)
// // })


// const user = {
//     name: "John",
//     age: 23,
//     location: 'Neyork',
//     married: false
//     // printInfo: function(){
//     //     console.log( `Name: ${this.name} \n Age: ${this.age}`)
//     // }
// };

// let printObj = function(obj){
//     for(let key in obj){
//         console.log(`${key}: ${obj[key]}`);
//     }
// }
// printObj(user)


// function randgenerator() {
//     return Math.floor((Math.random() * (11))); //between 1 and 10
// }

// // console.log(randgenerator())



// function guessGame() {
//     let ans = randgenerator();
//     console.log(ans);
//     let attemp = 0;
//     function core() {
//         let guess = prompt('enter no. bw 1 to 10');

//         if (guess > ans) {
//             console.log('lesser');
//             attemp++
//             core()
//         }
//         else if (guess < ans) {
//             console.log('moreer');
//             attemp++
//             core()
//         }
//         else {
//             console.log(`You win! it took you ${attemp} attempts`);
//             return
//         }
//     }
//     core()
// }
// guessGame()


// One object
// const std1 = {
//     name: 'shakira',
//     age: 34
// }
// array of objects
// const students = [
//     {name: 'shakira', age:34},
//     {name: 'hafsa', age:21},
//     {name: 'hj', age:28},
// ]

// students.push(keerat,34);
// console.log(students)

//Array Destructuring
// const arr = [2, 4, 5, 2, 1];
// const [a, d, g, s, v] = arr;
//so if you enter g youll get 5

// Object Detructuring
// const obj = {
//     name: 'SharedArrayBuffer',
//     age: 34,
// };
// const { name, age: umar } = obj

// destructuring with default values - adding values for property that doesnt exist in the object, like jagah here. Remeber it can only work for property that doesnt exits.
// const obj = {
//     naam: "kashmir",
//     umar: 1000,
//     something: undefined,
// };

// const {naam = "kuch aur", umar:age, jagah = "India", something = "now this will destructure value since it was undefined"} = obj;

// destructuring Parameters

// const obj = {
// naam: "kashmir",
//     umar: 1000,
//     something: undefined,
// };

// function findinObj1(user){
//     console.log("First Name - ", user.naam);
//     console.log("agers: ", user.umar)
// }

// function findinObj2({naam, umar}){
//     console.log("First Name - ", naam);
//     console.log("agers: ", umar)
// }
// findinObj2(obj);

// Rest Parameters - one function can take only one rest parameter

// const addNo = function (a, b, ...rest) {
//     console.log('Arguments - ' , a, b)
//     console.log('Rest Parameters-', rest)  //takes all the rest in one argument creating an array of rest parameters
//     console.log('Rest Parameters-', ...rest) //takes rest of the argumeents separately each.
// }
// addNo(2, 4,3333,555,3232)

// const maxNo = function(...more){
//     console.log(Math.max(...more));
// };

// maxNo(3,4,6,2,2,3,6,8)

// Array Function

// function sum1(a,b){
//     return a+b;
// }
// let sum2 = (a,b) => {
//     return a+b;
// }
// sum2(3,4)

// Limitations of Array function

// Do not have this keyword





// Do not have Arguments

// const carObj = {
//     name: "BMw",
//     year : 2002,
//     getName : ()=>{
//         console.log(this.name);
//     },
// };

// const arrfn = ()=>{
//     console.log(arguments);
// };
// function tradfn(){
//     console.log(arguments)
// }
// arrfn()
// tradfn()


// Cannot use as a constructor

// const person = (name) => {
//     this.name = name;
// };

// const ben = new person("Ben Joe");

// console.log(ben);


//Proporties

// Only one parameter and one statement

// const fn1 = a => a;
// console.log(fn1(2));

//multiple parameters with simple expressions
// const fn2 = (a,b) => a+b;
// console.log(fn2(4,2))

//multiple statements
// const fn3 = a => {
//     let b = 11;
//     return a+b;
// }
// console.log(fn3(1))

// multiple statemetns and multiple paramtes
// const fn4 = (a,c) => {
//     let b = 11;
//     return a+b+c;
// }
// console.log(fn4(1,2))

// immediately return object literal

// const obj = {
//     name:"shakier",
//     age:23,
// };

// function userInfo(user){
//     return{
//         name:user.name,
//         age:user.age,
//     };
// }

// const userInfo = user=>{
//     return{
//         name:user.name,
//         age:user.age,
//     };
// }

//OR

// const userInfo = user=> ({
//     name:user.name,
//     age: user.age,
// });
// console.log(userInfo(obj))

//destructuring obj with array function

// const obj = {
//     name:"shakier",
//     age:23,
// };

// const displayUser = ({name, age})=>{
//     return `Yuor name is ${name}, and age is ${age}`;
// }
// const user = displayUser(obj);
// console.log(user);
// const displayUser = ([name,age] = ["John", 50]) => `${name} ${age}`;

// const add9 = (a,b= 20) => a+b;

// const ans = add9(2);
// console.log(ans)

// anonymous function

(function (a) {
    return a + 2
})(234);

// OR

(a => a + 2)(4);