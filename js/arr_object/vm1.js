"use strict";

// function sumAll(arr) {
//     let out = 0;
//     if (arr[0] > arr[1]) {
//         for (let i = arr[1]; i <= arr[0]; i++) {
//             out += i;
//         }
//     } else if (arr[0] < arr[1]) {
//         for (let i = arr[0]; i <= arr[1]; i++) {
//             out += i;
//         }
//     } else {
//         out = arr[0];
//     }
//     return out;
// }

// sumAll([5, 1]);
// sumAll([1, 3]);

// --------------------------------PUSH()
const array = [42, 1, 1, 2, 3, 5, 8, 13];

// const push = (arr, num) => {
//     arr[arr.length] = num;
//     return arr.length;
// };

// const res = push(array, 42);
// console.log(res);
// console.log(array);
// ----------------------------------------------------POP()
// const pop = (arr) => {
//     const lastItem = arr[arr.length - 1];
//     arr.length -= 1;
//     return lastItem;
// };
// const res = pop(array);

// console.log(res);
// console.log(array);

// ----------------------------------------------------shift()
// function shift(arr) {
//     let firstItem = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i + 1];
//     }
//     arr.length -= 1;
//     return firstItem;
// }

// const res = shift(array);
// const res2 = shift(array);
// // let out = array.shift();

// // console.log(out);
// console.log(res);
// console.log(res2);
// console.log(array);
// ----------------------------------------------------unshift()
// const unshift = (arr, ...numbers) => {
//     const merget = [...numbers, ...arr];
//     for (let i = 0; i < merget.length; i++) {
//         arr[i] = merget[i];
//     }
//     return arr.length;
// };

// console.log(unshift(array, 42, 22));
// console.log(array);
// ---------------------------------------------------- slice
// function slice(arr, start, end) {
//     const result = [];
//     // let lastIndex = arr.length;
//     let lastIndex = end ? end : arr.length;
//     // if (end < 0) {
//     //     lastIndex -= Math.abs(end);
//     // }
//     for (let i = start; i < lastIndex; i++) {
//         result[i - start] = arr[i];
//     }
//     return result;
// }
// const res = slice(array, 2);
// const res2 = slice(array, 2, 4);

// console.log('res', res);
// console.log('res2', res2);
// console.log('array', array);
// ---------------------------------------------------- slice

// console.log(array.concat().splice(2));
// console.log(array.concat().splice(2, 2));
// console.log(array.splice(2, 2, 42, 22, 22, 22, 22));
// console.log(array);

// console.log(res);
// console.log(array);
// ---------------------------------------------------- foreach
// let date = Date.now();
// console.log(new Date(date));
// console.log(array);

// const iterator = (item, index, arr) => {
//     console.log(`item ${item}  index ${index}`);

// };
// array.forEach(iterator);

// array.forEach((item) => console.log(`item ${item}`));
// function forEach(arr, callbackFn) {
//     for (let i = 0; i < arr.length; i++) {
//         callbackFn(arr[i], i, arr);
//     }
// }

// forEach(array, function (item, index, arr) {
//     console.log(`item: ${item}, index: ${index}`);
// });
// ---------------------------------------------------- map
// array.map((item, index) => {
//     console.log(`item = ${item}, index = ${index}`);
// });

// const newMap = (arr, callbackFn) => {
//     const newArr = [];

//     for (let i = 0; i < arr.length; i++) {

//         newArr.push(callbackFn(arr[i], i, arr));

//     }
//     return newArr;
// };

// // console.log(newMap(array));
// console.log(newMap(array, item => item ** 2));

// const mass = [1, 2, -3, -4, -5, -6];

// const mass2 = mass.map(Math.abs);
// console.log(mass);
// console.log(mass2);
// ---------------------------------------------------- find
console.log(array);
const out = array.find((item) => item === 8);

console.log(out);