/*1.Выбор элементов на странице
1.1 Выбор по id 
1.2 Выбор одного элемента по селектору
1.3. Выбор несольких элементов по селектору

2.
*/

//1.1.
const h1 = document.getElementById("title");

console.log(h1);
// 1.2
const menu = document.querySelector(".menu");
console.log(menu);
const text = document.querySelector(".text");
console.log(text);
// 1.3
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);