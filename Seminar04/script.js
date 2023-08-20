// Local Storage
/* // ==== Функция вывода в консоль всего содержимого localStorage ======
function getLocalStorageItems() {
	for (let i = 0; i < localStorage.length; i++) {
		console.log(
			i,
			localStorage.key(i),
			localStorage.getItem(localStorage.key(i))
		);
	}
}
// ---------------------------------------------------------------------- 
*/

/* // ==== Пара ключ - значение в localStorage ==========================
localStorage.setItem('name1', 'Andrey'); // Undefined
localStorage.setItem('name2', 'Igor'); // Undefined
localStorage.setItem('name3', 'Katya'); // Undefined

getLocalStorageItems();
console.log('\n');

localStorage.removeItem('name2');
getLocalStorageItems();
console.log('\n'); 
// ----------------------------------------------------------------------
*/

/* // ==== Объекты в localStorage =======================================
const dog = {
name: 'Rex',
breed: 'terier',
};

localStorage.myDog = JSON.stringify(dog); // Правильно
getLocalStorageItems();

// localStorage.setItem('myDog', dog); Неправильно

// const dogReturn = localStorage.getItem('myDog'); // Неправильно

const dogReturn = JSON.parse(localStorage.getItem('myDog')); // Правильно
console.log('dogReturn: ', dogReturn);

// Но можно проще:
const dogReturnBetter = JSON.parse(localStorage.myDog); // Правильно
console.log('dogReturnBetter: ', dogReturnBetter);
// Или даже так:
console.log(JSON.parse(localStorage.myDog)); 
// -----------------------------------------------------------------------
*/

/* // ==== Массив чисел в localStorage ==================================

 // Создаём массив чисел
const array = [1, 2, 3, 4, 5, 6, 7];
// и сохраняем его в localStorage,
// где он хранится в виде строки элементов с разделением запятой
localStorage.setItem('array', array); // 1,2,3,4,5,6,7

// Получаем из хранилища строку и преобразуем её в массив строк:
const stringToArrayOfStrings = localStorage.getItem('array').split(',');
// ['1','2','3','4','5','6','7']
// Преобразуем массив строк в массив чисел:
const arrayOfNumbers = stringToArrayOfStrings.map((el) => parseFloat(el));
// [1, 2, 3, 4, 5, 6, 7]
console.log('arrayOfNumbers: ', arrayOfNumbers); 
// --------------------------------------------------------------- */

/* // ==== Массив строк в localStorage ==================================
// Создаём массив строк
const arrayStr = ['1', '2', 'three', '4', '5', 'six', '7'];
// и сохраняем его в localStorage,
// где он хранится в виде строки элементов с разделением запятой:
localStorage.setItem('arrayStr', arrayStr); // 1,2,three,4,5,six,7

// Получаем из хранилища строку и преобразуем её в массив строк:
const stringToArrayOfStrings = localStorage.getItem('arrayStr').split(',');
// ['1', '2', 'three', '4', '5', 'six', '7']
console.log('stringToArrayOfStrings: ', stringToArrayOfStrings);
// --------------------------------------------------------------- 
*/

/* // ==== Импорт и экспорт модулей JS ==================================
// Импорт модуля add из файла ./modules/add.js
import add from './modules/add.js';
console.log(add(3, 7));

// Импорт функции sub из файла ./modules/sub.js
import { sub, testArray } from './modules/sub.js';
console.log(sub(10, 5));

console.log('testArray: ', testArray);

// Импорт объекта. Если вводим "imporn mulDiv", то VSCode даёт подсказку.
// Если мы этому объекту присвоим другое имя, то всю строку вводим вручную.
// На работу функций это не повлияет.
import mulDiv from './modules/mulDiv.js';
console.log('mulDiv: ', mulDiv);
// Вызов функции из импортированного объекта mulDiv:
console.log('a * b = ', mulDiv.mul(5, 8)); // a * b =  40
console.log('a / b = ', mulDiv.div(5, 8)); // a / b =  0.625
// -------------------------------------------------------------------- 
*/

/* // ==== Асинхронность ================================================
const myPromise = new Promise((resolve, reject) => {});
console.log('myPromise: ', myPromise);

myPromise
	.then((value) => {
		// value - значение, полученное от сервера методом resolve
	})
	.catch((error) => {
		// обработка ошибки
	});
// ---------------------------------------------------------------------- 
*/

/* // ==== fetch - запрос и его обработка ===============================
const url = 'https://jsonplaceholder.typicode.com/users';

// получаем и выводим в консоль ответ сервера
// fetch(url).then((response) => console.log(response)); // здесь response - любое имя переменной

// получаем ответ сервера, и используя метод json, получаем данные с сервера:
fetch(url)
	.then((response) => response.json())
	.then((data) => console.log(data))
	.catch((err) => {
		console.error('Что-то пошло не так !');
		console.error(err);
	});
// ----------------------------------------------------------------------- 
*/

/* // ==== Шаблон для работы с сервером =================================
const url = 'https://jsonplaceholder.typicode.com/users';

const getData = (url) =>
	new Promise((resolve, reject) => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => resolve(data))
			.catch((error) => reject(error));
	});

// ==== Работа с данными ==============================================
// Используя показанный выше шаблон, мы можем проще работать с данными:
getData(url)
	// .then((data) => resolve(data))
	.then((data) => console.log(data))
	// .catch((error) => reject(error));
	.catch((error) => console.error(error));
// ----------------------------------------------------------------------- 
*/

/* // ==== async await ==================================================
const url = 'https://jsonplaceholder.typicode.com/users';

const getDataAsync = async (url) => {
	const resp = await fetch(url); // Ждём ответ сервера
	const data = await resp.json(); // Ждём получение данных от сервера
	return data;
};

// // Если создаём users без await, то получим Promise, а не массив !!!
// const users = await getDataAsync(url);
// console.log('users: ', users); // users:  (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

try {
	const users = await getDataAsync(url);
	console.log('users: ', users);
} catch (error) {
	console.log('Что-то пошло не так !');
}
// ------------------------------------------------------------------- 
*/

// ==== Проект NASA - работа с API ====================================
const nasaURL =
	'https://api.nasa.gov/planetary/apod?api_key=YBilIZUq642GmIczHkx23gLtNCgk2sbBe3atVi1u&count=10';

const div = document.querySelector('.wrapper');

const getDataNasa = async (nasaURL) => {
	const resp = await fetch(nasaURL); // Ждём ответ сервера
	const data = await resp.json(); // Ждём получение данных от сервера
	return data;
};

try {
	const nasaData = await getDataNasa(nasaURL);
	console.log('nasaData: ', nasaData);
	nasaData.forEach((element) => {
		div.insertAdjacentHTML(
			'beforeend',
			`
		<figure>
  			<img src="${element.hdurl}" alt="${element.title}" />
  			<figcaption>${element.explanation}</figcaption>
		</figure>
		`
		);
	});
} catch (error) {
	console.log('Что-то пошло не так !');
}
// -------------------------------------------------------------------
