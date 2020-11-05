// Import
import { words } from './words.js';

// DOM Element
let body = document.querySelector('body');
let game = document.createElement('div');
body.appendChild(game);
game.textContent = 'Ура! Ты выиграл!';

// Random word
let word = words[Math.floor(Math.random() * words.length)];
let count = word.length;
let result = Array(word.length).fill('__');
console.log(word);

// Game
alert(`Начинаем! Здесь слово из ${count} букв кириллического алфавита! ${result}`);

while(count > 0) {
  let letter = prompt('Введи букву или нажми "Отмена" для выхода из игры');
  if (letter === null) {
    game.textContent = 'Очень жаль!  :(  Приходи в другой раз.';
    break;
  } else if (letter.length !== 1) {
    alert('Пожалуйста, введи одну букву')
  } else if (result.indexOf(letter) !== -1) {
    alert('Эта буква уже была!')
  } else {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        result[i] = letter;
        count--;
      }
    }
  }
  if (count === 0) {
    break;
  } else {
    alert(`Осталось отгадать ${count} букв! ${result}`);
  }
}


// Доделать:
// - проверку на то, является ли letter строкой (через регулярные выражения);
// - добавить сообщение типа 'Попробуй еще', если буква не угадана
// - переписать набор else if через switch
// - на счетчик повесить двойную длину word (и переписать цикл), чтобы ограничить количество попыток
// - создать массив со всеми введенными символами и проверять наличие letter в нем, а не в word, чтобы выдать сообщение 'Эта буква уже была'
// - почему после 'Очень жаль' иногда(отловить, когда именно это происходит) сразу запускается новая игра?
// - можно ли переписать import через default
// - можно ли переписать игру, чтобы она выводилась в html, а не в алертах
// - может стоит добавить предварительный вопрос перед началом игры (пример ниже)

// let play = confirm('Поиграем?');
//  if (play) {

   
//  } else {
//    alert('очень жаль :(');
//  }