let name = 'MaryMaistrova'
const fullName = 'MariiaM'
let Name = "Mary", LastName = 'Maistrova'
let $ = 'namesurname'
let _me = 'myfullname'

// wrong names
// let 123 = 'myname'
// const my-name = 'manameagain'
// let let = 'fullname'

// way of commenting - ctrl+/
/*way of commenting - multi-lines
way of commenting*/


// стилі написання змінних
// 1. Довго і нудно
// let message;
// message = 'Привіт!';

// 2. Короткий
// let message = 'Привіт!';

// 3. Декілька змінних разом
// let user = 'Іван', age = 25, message = 'Привіт';

// 4. Багаторядковий спосіб
// let user = 'Іван';
// let age = 25;
// let message = 'Привіт';

// 5. Інший запис
// let user = 'Іван',
//   age = 25,
//   message = 'Привіт';

// ask User's name and return an answer
let question = prompt('Enter your name: ')
alert(`Hello ${question}!`)

// User's age
let userYear = Number(prompt('Enter your birthyear: '))
const thisYear = 2024
let age = thisYear - userYear
alert(`Your age is ${age}!`)

// square perimeter

let side = Number(prompt("To find square's perimeter enter square's side: "))
let perimeter = side * 4
alert(`Square's perimeter equals ${perimeter}!`)