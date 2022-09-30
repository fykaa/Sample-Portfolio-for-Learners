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
const std1 = {
    name: 'shakira',
    age: 34
}
// array of objects
const students = [
    {name: 'shakira', age:34},
    {name: 'hafsa', age:21},
    {name: 'hj', age:28},
]

students.push(keerat,34);
console.log(students)