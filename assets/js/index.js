// 1. Об’явити масив з довільними елементами. За допомогою циклу вивести всі елементи масиву послідовно в консоль


// const arr = [2, 4, 6, 8, 10];

// for (let i of arr) {
//     console.log(i);
// }


// 2. Дан масив з цілими числами. За допомогою циклу вивести елементи масива, які є парними числами

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const i of arr) {
//     if (i % 2 === 0) {
//         console.log(i);
//     };
// }


// (завдання на методи масивів):

// 3.  Дано два масива: [1, 2, 3] і [4, 5, 6]. Об'єднати їх разом 

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// 1.
// const arr3 = arr1.concat(arr2);
// console.log(arr3);

// 2.
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

//3.
// arr1.push(...arr2);
// console.log(arr1);




// 4. Даний масив [6, 5, 4]. Зробити з нього масив [4, 5, 6]

// let arr4 = [6, 5, 4];

// 1.
// const arrReversed = arr4.reverse();
// console.log(arr4);


//2.
// let arrRev2 = [];

// for (let i = arr4.length - 1; i >= 0; i--) {
//     arrRev2.push(arr4[i]);
// }
// console.log(arrRev2);


// 3.
// let arrRev3 = [];

// for (let i of arr4) {
//     arrRev3.unshift(i);
// }

// console.log(arrRev3);





// 5. Даний масив [1, 2, 3]. Додати йому в кінець елементи 4, 5, 6


// 1.
// const arr5 = [1, 2, 3];
// let arr5Full = [...arr5];

// for (let i = 0; i < arr5.length; i++) {
//         arr5Full.push(arr5Full[arr5Full.length-1] + 1);
// }
// console.log(arr5Full);

// 2.
// const arr5 = [1, 2, 3];
// arr5.push(4, 5, 6);
// console.log(arr5);



// 6. Даний масив [7, 8, 9]. Додати йому на початок 1, 2, 3

// 1.
// const arr6 = [7, 8, 9];
// arr6.unshift(1, 2, 3);
// console.log(arr6);

// 2. 

// const arr6 = [7, 8, 9];
// const arr6Full = [...arr6];

// for (let i = arr6.length; i >= 1; i--) {
//     arr6Full.unshift(i);
// } 
// console.log(arr6Full);



// 7. Даний масив ['aaa', 'bbb', 'ccc']. Виведіть в консоль перший елемент та видаліть його.

// const arr7 = ['aaa', 'bbb', 'ccc'];
// console.log(arr7[0]);
// arr7.shift();
// console.log(arr7);


// 8. Даний масив ['aaa', 'bbb', 'ccc']. Виведіть в консоль та видаліть останній елемент


// const arr8 = ['aaa', 'bbb', 'ccc'];
// console.log(arr8[arr8.length - 1]);
// arr8.pop();
// console.log(arr8);




// 9. Даний масив [9, 10, 11, 12, 13]. Скопіювати в новий масив елементи з другого по п'ятий

// 1.
// const arr9 = [9, 10, 11, 12, 13];
// const arr9Copy = [...arr9].slice(1, 5);
// console.log(arr9Copy);


// 2.
// const arr9 = [9, 10, 11, 12, 13];
// arr9.splice(0, 1);
// console.log(arr9);



// 10. З масиву [1, 2, 3, 4, 5] зробити масив [1, 4, 5] (оригінальний має змінитись)

// const arr10 = [1, 2, 3, 4, 5];
// arr10.splice(1, 2);
// console.log(arr10);




// 11. З масиву [1, 2, 3, 4, 5] скопіювати в новий масив [3, 4, 5]

// const arr11 = [1, 2, 3, 4, 5];
// const arr11Copy = [...arr11].splice(2, 5);
// console.log(arr11Copy);



// 12. З масиву  [1, 2, 3, 4, 5] (не однією командою) зробити масив [1, 'w', 'trtr', 2, 3, 4, 'vvv', 'a', 'hello']

// 1.
// const arr12 = [1, 2, 3, 4, 5];

// arr12.splice(1, 0, 'w', 'trtr');
// arr12.splice(-1, 1, 'vvv', 'a', 'hello');

// console.log(arr12);


// 2.
// const arr12 = [1, 2, 3, 4, 5];

// const arr12New = [
//     ...arr12.slice(0, 1),
//     'w',
//     'trtr',
//     ...arr12.slice(1, 4),
//     'vvv',
//     'a',
//     'hello'
// ];
// console.log(arr12New);

// 3.
// const arr12 = [1, 2, 3, 4, 5];

// const elementsToAdd1 = ['w', 'trtr'];
// const elementsToAdd2 = ['vvv', 'a', 'hello'];

// let index1 = 1;
// for (const element of elementsToAdd1) {
//     arr12.splice(index1, 0, element);
//     index1++;
// }

// let index2 = 6;
// for (const element of elementsToAdd2) {
//     arr12.splice(index2, 1, element);
//     index2++;
// }

// console.log(arr12);




// Таска з *:

// Написати функцію, яка приймає рядок і масив голосних літер, повертає кількість включень голосних у заданому рядку

// function countVovels(str, vovelsArray)

// vovelsArray = [a, e, i, o, u, y]

// 'hello to you' //6

// 'lorem ipsum dolor sit amet' // 9


// 1.
// const vowelsArray = ['a', 'e', 'i', 'o', 'u', 'y'];

// function countVowels(str) {
//     let count = 0;
//     for (const letter of str.toLowerCase()) {
//         if (vowelsArray.includes(letter)) {
//             count++;
//         }
//         // console.log(letter);
//     }
//     return `Your string contains ${count} vowels!`;
// }
// console.log(countVowels('lorem ipsum dolor sit ame'));


// 2.
// const vowelsArray = ['a', 'e', 'i', 'o', 'u', 'y'];

// function countVowels(str, arr) {
//     const vowelsInStr = [...str.toLowerCase()].filter(letter => arr.includes(letter));
//     return `Your string contains ${vowelsInStr.length} vowels!`
// }

// console.log(countVowels('Lorem Ipsum doloR sit Ame', vowelsArray));



// 3.
// const vowelsArray = ['a', 'e', 'i', 'o', 'u', 'y'];
// function countVowels(str, arr) {
//     //console.log(str.toLowerCase().split(''));

//     return `Your string contains ${str.toLowerCase().split('').reduce((count, letter) => {
        
//         if (arr.includes(letter)) {
//             return count + 1;
//         } else {
//             return count;
//         }
//     }, 0)} vowels!`
    
// }
// console.log(countVowels('Lorem Ipsum doloR sit Ame', vowelsArray));


// 4.
// const vowelsArray = ['a', 'e', 'i', 'o', 'u', 'y'];
// function countVowels(str, arr) {
//     return `Your string contains ${str.toLowerCase().split('').reduce((count,letter) => arr.includes(letter) ? count + 1 : count, 0)} vowels!`
// }
// console.log(countVowels('Lorem Ipsum doloR sit AmeiiiiAAA', vowelsArray));

// 4.
// const vowelsArray = ['a', 'e', 'i', 'o', 'u', 'y'];

// function countVowels(str, arr) {
//     let count = 0;
//     for (const letter of str.toLowerCase()) {
//         if (arr.includes(letter)) {
//             count++;
//         }
//         // console.log(letter);
//     }
//     return `Your string contains ${count} vowels!`;
// }

// console.log(countVowels('lorem ipsum dolor sit ame', vowelsArray));
