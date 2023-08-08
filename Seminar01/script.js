// Задание 1.
// ==========================================================
// Пример 1.

/* 
arr1 = [1, 2, 3];
arr2 = [4, 5, 6];

const mergeArray = (array1, array2) => [...array1, ...array2];

console.log(mergeArray(arr1, arr2)); 
*/

// Пример 2. Вариант 1.
// Используем indexOf() и index для выявления повторов
/* function removeDuplicates(...numbs) {
	console.log('rest: ', numbs);
	let arr = [...numbs];
	return arr.filter((el, index) => {
		// Если находим ещё такой-же элемент, то у него будет свой индекс index,
		// а indexOf(el) даст нам индекс первого в массиве такого элемента.
		// В итоге, индексы не совпадут, и следующий такой же элемент не пропустит фильтр
		return arr.indexOf(el) === index;
	});
}

console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5)); */

// Пример 2. Вариант 2.
// Создаём коллекцию (множество), которая автоматически исключает повторы
/* function removeDuplicates(...numbs) {
	const uniqArray = [...new Set([...numbs])];
	return uniqArray;
}
console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5)); 
*/

// Задание 2.
// ==========================================================
// Пример 1. Вариант 1.
// -----------------------------------------
/* function getEvenNumbers(...numbs) {
	return [...numbs].filter((el) => {
		return el % 2 === 0;
	});
}

const numbers = [1, 5, 4, 7, 2, 8, 12, 17, 4];
console.log(getEvenNumbers(...numbers)); 
*/

// Пример 1. Вариант 2.
// -----------------------------------------
/* const getEvenNumbers = (arr) => {
	const newArray = arr.filter((el) => {
		if (el % 2 === 0) {
			return el;
		}
	});
	return newArray;
};

const numbers = [1, 5, 4, 7, 2, 8, 12, 17, 4];
console.log(getEvenNumbers(numbers)); */

// Пример 2. Вариант 1.
// -----------------------------------------
/* function calculateAverage(...numbs) {
	let sum = 0;
	for (const item of [...numbs]) {
		sum += item;
	}
	return sum / [...numbs].length;
}

const numbers = [1, 5, 4, 7, 2, 8, 12, 17, 4];
console.log(calculateAverage(...numbers)); 
*/

// Пример 2. Вариант 1.
// -----------------------------------------
/* const calculateAverage = (arr) => {
	const newArray = arr.reduce((acc, el) => {
		return acc + el;
	});
	return newArray / arr.length;
};

const numbers = [1, 5, 4, 7, 2, 8, 12, 17, 4];
console.log(calculateAverage(numbers)); */

// Пример 3. Вариант 1. Используем split(), slice()
// ------------------------------------------------
/* function capitalizeFirstLetter(someString) {
	let arrString = someString.split(' ');
	let newString = [];

	for (let word of arrString) {
		word =
			word.toLowerCase().slice(0, 1).toUpperCase() +
			word.toLowerCase().slice(1);
		newString = newString + word + ' ';
	}
	return newString;
}

const str = 'папа у ВАСИ силён в математике';
console.log(capitalizeFirstLetter(str)); */

// Пример 3. Вариант 2. Используем split(), slice()
// ------------------------------------------------
/* const capitalizeFirstLetter = (str) => {
	return str.replace(/(^|\s)\S/g, (char) => char.toUpperCase());
};

const str = 'папа у ВАСИ силён в математике';
console.log(capitalizeFirstLetter(str)); // Папа У ВАСИ Силён В Математике */

// Задание 3.
// ==========================================================

// Не доработана
/* function createCalculator(number) {
	let initNumber = 125;
	const add = (number) => {
		return initNumber + number;
	};
	const sub = (number) => {
		return initNumber - number;
	};
} */

// На семинаре
/* const createCalculator = (arg) => {
	return {
		add(numb) {
			return arg + numb;
		},
		subtract: function (numb) {
			return arg - numb;
		},
	};
};

const calc = createCalculator(20);
console.log('calc: ', calc);
console.log('calc.add(15): ', calc.add(15)); */

/* const createCalculator = () => {
	return {
		arg: 20,
		add(numb) {
			return this.arg + numb;
		},
		subtract: function (numb) {
			return this.arg - numb;
		},
	};
};

const calc = createCalculator();
console.log('calc: ', calc);
console.log('calc.add(15): ', calc.add(15)); 
*/

// Задание 4.
// ==========================================================
/* Напишите функцию createGreeting, которая принимает имя
 * пользователя и возвращает функцию, которая будет выводить
 * приветствие с использованием этого имени.
 * // Пример использования:
 * const greeting = createGreeting('John');
 * greeting(); // Ожидаемый результат: "Hello, John!"
 */

// На семинаре
/* const createGreeting = (name) => {
	const greeting = (name) => `Hello, ${name}`;
	return greeting(name);
};

const str = createGreeting('John');
console.log('str: ', str); // str:  Hello, John 
*/

// Упрощённый вариант этого же решения:
// ---------------------------------------
/* const createGreeting = (name) => {
	const greeting = () => `Hello, ${name}`;
	return greeting();
};

const str = createGreeting('John');
console.log('str: ', str); // str:  Hello, John 
*/

// Задание 5. На семинаре не решалась !!!
// ==========================================================
/* Задача: Напишите функцию createPasswordChecker, которая
 * принимает допустимую длину пароля в качестве аргумента и
 * возвращает функцию для проверки введенного пароля.
 * Возвращаемая функция должна принимать пароль и возвращать
 * true, если его длина соответствует допустимой, и false в противном
 * случае.
 * // Пример использования:
 * const isPasswordValid = createPasswordChecker(8);
 * console.log(isPasswordValid('password')); // Ожидаемый результат:
 * false
 * console.log(isPasswordValid('secret')); // Ожидаемый результат: true
 */

// Задание 6.
// ==========================================================
/* Напишите рекурсивную функцию sumDigits, которая принимает 
 * положительное целое число в качестве аргумента и возвращает 
 * сумму его цифр.

 * // Пример использования:
 * console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
 * console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 
 * + 7 + 8 + 9) 
*/

// Задание 5. Вариант 1.
// ----------------------------------
let sum = 0;
function sumDigits(num) {
	// Проверяем, если в числе одна цифра, то выводим сумму
	if (num < 10) {
		return sum + num;
	} else {
		// Иначе добавляем к сумме остаток от деления числа на 10,
		sum += num % 10;
		// а результат деления на десять используем как аргумент для рекурсивного вызова
		return sumDigits(Math.floor(num / 10));
	}
}
console.log(sumDigits(123456789)); // 45

// Задание 5. Вариант 2.
// ----------------------------------
/* const sumDigits = (num) => {
	if (num < 10) {
		return num;
	} else {
		return (num % 10) + sumDigits(Math.floor(num / 10));
	}
};
console.log(sumDigits(456789)); // 45 
*/
