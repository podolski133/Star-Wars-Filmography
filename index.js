const button = document.querySelector('button'); // На странице есть кнопка и кнопка эта тег-button
const output = document.querySelector('.output'); // На странице есть некое место куда можно вывести и это место с классом output



button.addEventListener('click', function () {    // кнопка (button) слушай если произойдет событие (addEventListener) что пользователь нажал на тебя, то выполни вот такую функцию
  output.innerHTML = 'Переходи по ссылке выше';   // в документе где есть output появляется эта надпись
});