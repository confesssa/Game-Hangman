// DOM Element
// let body = document.querySelector('body');
// let game = document.createElement('div');
// body.appendChild(game);
// game.textContent = result;



// let play = confirm('Поиграем?');
//  if (play) {



   
   
//  } else {
//    alert('очень жаль :(');
//  }

import { words } from './words.js';
let word = words[Math.floor(Math.random() * words.length)];
console.log(word);
let result = [];

for (let i = 0; i < word.length; i++) {
  result.push('_');
}
let count = word.length;

console.log(count);
console.log(result);

   


// while (word !== result) {

//   let letter = prompt('Введи букву');
//   if (word.findIndex(letter)) {
//     console.log(word.findIndex(letter));

//   }

// }
// alert('Мои поздравления!');

// alert(word);