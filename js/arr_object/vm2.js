"use strict";

const array = [1, 2, 3, 4, 5, 6, 7];
const next = [8, 9];
const next2 = [10, 11];
const next3 = [0];

// ---------------------------------------------------concat

// const concat = (arr, sub = []) => {
//     const copy = [];
//     const counter = arr.length + sub.length;

//     for (let i = 0; i < counter; i++) {
//         if (i < arr.length) {
//             copy[i] = arr[i];
//         } else {
//             copy[i] = sub[i - arr.length];
//         }
//     }
//     return copy;
// };

// console.log(concat(array));
// console.log(concat(array, [42, 42]));
// console.log(concat(array, next));

// --------------------------------------------------- reverse

// const reverse = (arr) => {
//     const out = arr.concat();
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = out[arr.length - 1 - i];
//         //  0 =>       7        - 1 - 0    = 6
//         //  1 =>       7        - 1 - 1    = 5
//     }
//     return arr;
// };

// console.log(reverse(array));
// console.log(reverse(next));
// console.log(array);

// --------------------------------------------------- fill


// const fill = (arr, value, start, end) => {
//     const copy = arr.concat();

//     for (let i = 0; i < arr.length; i++) {
//         if (typeof start === 'undefined') {
//             arr[i] = value;
//         } else if (typeof start !== 'undefined' && typeof end === 'undefined') {
//             if (start <= i) {
//                 arr[i] = copy[i];
//             } else {
//                 arr[i] = value;
//             }
//         } else if (typeof start !== 'undefined' && typeof end !== 'undefined') {
//             if (start <= i && end >= i) {
//                 arr[i] = value;
//             } else if (end < i) {
//                 arr[i] = copy[i];
//             } else {
//                 arr[i] = copy[i];
//             }
//         }
//     }
//     return arr;
// };

// console.log(fill(array, 42));
// // console.log(fill(array, 44, 3, 4));
// // console.log(fill(array, 22, 2));
// console.log(array);
// console.log('------------------------------');

// function toHTML(item, index) {
//     const tag = `h${index+1}`;
//     return `<${tag}> This is some text </${tag}>`;
// }
// const template = new Array(6)
//     .fill('')
//     .map(toHTML)
//     .join('');

// console.log(template);
// document.body.innerHTML = template;


// --------------------------------------------------- includes
// const includes = (arr, item, start = 0) => {
//     for (let i = start; i < arr.length; i++) {
//         if (item === arr[i]) {
//             return true;
//         }
//     }
//     return false;
// };
// console.log(includes(array, 1, 3));
// console.log(includes(array, 1));
// --------------------------------------------------- filter
// function log(args) {
//     console.log(args);
// }

// log(array.filter(item => item % 2 === 0));

// const filtered = array
//     .filter(item => item % 2)
//     // 3 % 2 => return 1
//     // 4 % 2 => return 0
//     .filter(item => item >= 3)
//     .map(item => item ** 2)
//     .filter(item => item > 10);

// log(filtered);

// const values = [42, 1, null, undefined, 'a', 0, 1, 'Sergey', false, true, ''];
// // auto to  Boolean
// log(values.filter(item => item));

// const text = `Привет, Я мат1 рад Тебя видеть, мат2 как давно Тебя не было видно.
//  Ты мат1 такая красиваяю Мат2 Я рад. `;

// const restricted = ['мат1', 'мат2'];
// const clear = (word) => !restricted.includes(word.toLowerCase());
// const res = text.split(' ')
//     .filter(word => clear(word))
//     .join(' ');

// console.log(res);
// --------------------------------------------------- evtry some
// log(array);
// log(array.some(i => i % 2));
// log(array.some(i => i > 5));
// log(array.some(i => typeof i === 'string'));
// --------------------------------------------------- sort
// СОздание своего алфавита перемешенного
// const start = 'a'.charCodeAt();
// const end = 'z'.charCodeAt();
// const letters = new Array(end - start + 1)
//     .fill('')
//     .map((_, index) => String.fromCharCode(start + index));


// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
// }
// shuffle(letters);
// letters.sort();
// log(letters);
// --------------------------------------------------- reduce
const cart = [{
        title: 'Apple',
        price: 49
    },
    {
        title: 'Banana',
        price: 149
    }
];

const total = cart.reduce((sum, item) => {
    return sum + item.price;
}, 0);
console.log(total);
// --------------------------------------------------- flat
















































function log(args) {
    console.log(args);
}