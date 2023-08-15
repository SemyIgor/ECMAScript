// task01();
// task02();
// task03();
// task04();
test();

function task01() {
	/* Напишите функцию getPrototypeChain(obj),
	 * которая будет возвращать цепочку прототипов для заданного объекта obj.
	 * Функция должна вернуть массив прототипов,
	 * начиная от самого объекта и заканчивая
	 * глобальным объектом Object.prototype.
	 */

	const getPrototypeChain = (obj) => {
		let prototypes = [];

		while (obj !== null) {
			prototypes.push(obj);
			obj = Object.getPrototypeOf(obj);
		}

		return prototypes;
	};

	console.log('getPrototypeChain(): ', getPrototypeChain({ arg1: 100500 }));
	console.log(Object.getPrototypeOf(String('Hi !')));
}

function task02() {
	/* Напишите конструктор объекта Person, который принимает два аргумента:
	 * name (строка) и age (число). Конструктор должен создавать объект с
	 * указанными свойствами name и age и методом introduce(), который
	 * выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
	 */
	function Person(name, age) {
		this.name = name;
		this.age = age;
		this.introduce = function () {
			console.log(`Меня зовут ${this.name}, мне ${this.age} лет`);
		};
	}

	const person1 = new Person('Фёдор', 25);
	console.log('person1: ', person1);

	const person2 = new Person('Егор', 36);
	console.log('person2: ', person2);
	console.log('person2: ', person2.introduce());
}

function task03() {
	/*
	 * Напишите конструктор объекта BankAccount, который будет
	 * представлять банковский счет. Конструктор должен принимать два
	 * аргумента: accountNumber (строка) и balance (число). Конструктор
	 * должен создавать объект с указанными свойствами accountNumber и
	 * balance и следующими методами:
	 *
	 * 1. deposit(amount): принимает аргумент amount (число) и увеличивает
	 * баланс на указанную сумму.
	 * 2. withdraw(amount): принимает аргумент amount (число) и уменьшает
	 * баланс на указанную сумму, если на счету есть достаточно средств.
	 * Если средств недостаточно, выводится сообщение "Недостаточно
	 * средств на счете.".
	 * 3. getBalance(): возвращает текущий баланс счета.
	 */

	function BankAccount(accountNumber, balance) {
		this.accountNumber = accountNumber;
		this.balance = balance;
		this.deposit = function (amount) {
			this.balance += amount;
			console.log(
				`На счёт №${this.accountNumber} внесена сумма ${amount} итого на счёте ${this.balance}`
			);
		};
		this.withdraw = function (amount) {
			if (this.balance < amount) {
				console.log('На счёте недостаточно средств для такой операции');
			} else {
				this.balance -= amount;
				console.log(
					`Со счёта №${this.accountNumber} снята сумма ${amount} итого на счёте ${this.balance}`
				);
			}
		};
		this.getBalance = function () {
			console.log(`На счёте №${this.accountNumber} итого ${this.balance}`);
		};
		console.log(`Открыт счёт №${this.accountNumber}. Баланс ${this.balance}`);
	}

	const ourBankAccount = new BankAccount('7777777777', 20000);

	ourBankAccount.deposit(2500);
	ourBankAccount.withdraw(32500);
	ourBankAccount.withdraw(12500);
	ourBankAccount.getBalance();
}

function task04() {
	/*
	 * Создайте класс Animal, который будет представлять животное. У
	 * класса Animal должны быть следующие свойства и методы:
	 *
	 * ● Свойство name (строка) - имя животного.
	 * ● Метод speak() - выводит в консоль звук, издаваемый животным.
	 *
	 * Создайте подкласс Dog, который наследует класс Animal. Для
	 * подкласса Dog добавьте дополнительное свойство и метод:
	 *
	 * ● Свойство breed (строка) - порода собаки.
	 * ● Метод fetch() - выводит в консоль сообщение "Собака [name]
	 * принесла мяч.".
	 */

	class Animal {
		constructor(name) {
			this.name = name;
		}
		speak() {
			console.log(`${this.name} sounds`);
		}
	}

	class Dog extends Animal {
		constructor(name, breed) {
			super(name);
			// this.name = name; // Можно оставить эту строку, тогда super() оставить без аргументов
			this.breed = breed;
		}
		fetch() {
			console.log(`Собака ${this.name} принесла мяч`);
		}
	}

	const myAnimal = new Animal('Фича');
	console.log('myAnimal: ', myAnimal);

	const myDog = new Dog('Rex', 'terrier');
	console.log('myDog: ', myDog);

	myAnimal.speak(); // Фича sounds
	myDog.speak(); // Rex sounds
	myDog.fetch(); // Собака Rex принесла мяч
	/*
	myAnimal.fetch(); // Ошибка - у объекта нет такого метода
	*/
	console.log('myDog: ', myDog);
}

function test() {
	class NewMath {
		constructor() {
			// super();
			// this.a = a;
			// this.b = b;
		}
		add(a, b) {
			return (a + b) * 2;
		}
		sub(a, b) {
			return a - b;
		}
	}
	const myMath = new NewMath();
	let obj = new NewMath();
	console.log('myMath.add(2,3): ', myMath.add(2, 3));
	console.log('myMath.sub(7,3): ', myMath.sub(7, 3));
}
