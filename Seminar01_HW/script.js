menu();
// task01();
// task02();
// task03();

function task01() {
	/* Дан массив const arr = [1, 5, 7, 9]
	 * с помощью Math.min и spread оператора,
	 * найти минимальное число в массиве, решение задание должно состоять из одной строки
	 */

	const arr = [1, 5, 7, 9];
	console.log(
		`Минимальный элемент массива [ ${arr} ] равен ${Math.min(...arr)}`
	);
}

function task02() {
	/* Напишите функцию createCounter, которая создает счетчик
	 * и возвращает объект с двумя методами: increment и decrement.
	 * Метод increment должен увеличивать значение счетчика на 1,
	 * а метод decrement должен уменьшать значение счетчика на 1.
	 * Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
	 */
	function createCounter(counter) {
		return {
			increment() {
				return ++counter;
			},
			decrement() {
				return --counter;
			},
			count() {
				return counter;
			},
		};
	}

	const counter = createCounter(20);
	console.log(
		`Инкремент числа ${counter.count()} равен ${counter.increment()}`
	);
	console.log(
		`Декремент числа ${counter.count()} равен ${counter.decrement()}`
	);
}

function task03() {
	/*    Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
	 * // примеры вызова функции
	 * console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
	 * console.log(factorial(0)); // выводит 1 (по определению факториала)
	 */

	const factorial = (num) => {
		if (num === 0 || num === 1) {
			return 1;
		} else {
			return num * factorial(num - 1);
		}
	};

	console.log(`Факториал числа 0 равен ${factorial(0)}`); // выводит 1 (по определению факториала)
	console.log(`Факториал числа 5 равен ${factorial(5)}`); // выводит 120 (5 * 4 * 3 * 2 * 1)
}

function errorMessage() {
	alert('Ошибка ввода! Повторите ввод');
}

function menu() {
	let check = false;
	do {
		let userEnter = prompt(
			'Введите номер задачи (1, 2 или 3) для просмотра, q(Q) - для выхода '
		);
		if (
			userEnter === 'q' ||
			userEnter === 'Q' ||
			userEnter === 'й' ||
			userEnter === 'Й'
		) {
			console.log('Выход из программы');
			check = true;
		} else {
			userEnter === '1'
				? task01()
				: userEnter === '2'
				? task02()
				: userEnter === '3'
				? task03()
				: errorMessage();
		}
	} while (check === false);
}
