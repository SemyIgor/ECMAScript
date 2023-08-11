// task01();
// task02();
// task03();
// task04();
task05();

function task01() {
	/*    Создайте объект Person, представляющий человека, с
	 * следующими свойствами: name, age и gender. Добавьте
	 * также методы introduce и changeName. Метод introduce
	 * должен выводить информацию о человеке, включая его
	 * имя, возраст и пол. Метод changeName должен изменять
	 * имя человека на новое заданное значение.
	 * Person.name = "John";
	 * Person.age = 25;
	 * Person.gender = "male";
	 * Person.introduce(); // Ожидаемый результат: My name is
	 * John. I'm 25 years old and I identify as male.
	 * Person.changeName("Mike");
	 */

	const Person = {
		// name: this.name,
		// age: this.age,
		// gender: this.gender,

		// Так тоже работает и, по-моему, это более правильно
		name: '',
		age: null,
		gender: '',

		introduce() {
			console.log(
				`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`
			);
		},
		changeName(newName) {
			this.name = newName;
		},
	};

	Person.name = 'John';
	Person.age = 25;
	Person.gender = 'male';

	Person.introduce();
	Person.changeName('Mike');
	Person.introduce();
}

function task02() {
	/*    Создайте объект Animal со свойством name и методом eat(), который
	 * выводит сообщение о том, что животное ест. Создайте объект Dog со
	 * свойством name и методом bark(), который выводит сообщение о
	 * том, что собака лает. Используйте одалживание метода eat() из
	 * объекта Animal для объекта Dog, чтобы вывести сообщение о том,
	 * что собака ест.
	 */

	/* // Одалживание метода eat() из объекта Animal к объекту Dog
	 * Dog.eat = Animal.eat;

	 * Dog.eat(); // Вывод: Rex is eating. 
   */

	const Animal = {
		name: 'Rex',
		eat() {
			console.log(`${this.name} is eating.`);
		},
	};

	const Dog = {
		name: this.name,
		bark() {
			console.log(`${this.name} is barking.`);
		},
		// Одалживание метода внутри объекта:
		// eat: Animal.eat,
	};
	Dog.name = 'Muhtar';

	// Одалживание метода перед использованием
	Dog.eat = Animal.eat;

	Animal.eat();
	Dog.eat();
	Dog.bark();
}

function task03() {
	/* Создайте объект calculator с методами add(), subtract() и multiply(),
	 * которые выполняют соответствующие математические операции над
	 * двумя числами. Используйте методы call и apply для вызова этих
	 * методов с передачей аргументов.
	 */

	const Calculator = {
		add(x, y) {
			return x + y;
		},
		subtract(x, y) {
			return x - y;
		},
		multiply(x, y) {
			return x * y;
		},
	};

	const Numbs = {
		first: this.first,
		second: this.second,
	};

	const ContextNumbers = {};

	// Можно использовать контекст объекта Numbs, получив от него аргументы
	console.log(Calculator.add.call(Numbs, 2, 4)); // 6
	console.log(Calculator.subtract.call(Numbs, 2, 4)); // -2
	console.log(Calculator.multiply.call(Numbs, 2, 4)); // 8

	console.log(Calculator.add.apply(Numbs, [2, 4])); // 6
	console.log(Calculator.subtract.apply(Numbs, [2, 4])); // -2
	console.log(Calculator.multiply.apply(Numbs, [2, 4])); // 8

	// Можно использовать никакой (null) контекст, и получить от него аргументы:
	console.log(Calculator.add.call(null, 2, 4)); // 6
	console.log(Calculator.subtract.call(null, 2, 4)); // -2
	console.log(Calculator.multiply.call(null, 2, 4)); // 8

	console.log(Calculator.add.apply(null, [2, 4])); // 6
	console.log(Calculator.subtract.apply(null, [2, 4])); // -2
	console.log(Calculator.multiply.apply(null, [2, 4])); // 8

	const CalculatorNew = {
		x: 0,
		y: 0,
		add() {
			return this.x + this.y;
		},
		subtract() {
			return this.x - this.y;
		},
		multiply() {
			return this.x * this.y;
		},
	};

	const NumbsNew = {
		x: 5,
		y: 8,
	};

	console.log(CalculatorNew.add.call(NumbsNew)); // 13
	console.log(CalculatorNew.subtract.call(NumbsNew)); // -3
	console.log(CalculatorNew.multiply.call(NumbsNew)); // 40
}

function task04() {
	/*    Создайте класс Person, который имеет свойства name и age, а также
	 * метод introduce(), который выводит сообщение с представлением
	 * имени и возраста персоны.
	 */

	/* const person = new Person('John', 25);
	 * person.introduce(); // Вывод: My name is John and I'm 25 years old
	 */

	class Person {
		// Свойства объекта отключены, так как определяются конструктором
		// name;
		// age;

		constructor(name, age) {
			this.name = name;
			this.age = age;
		}

		introduce() {
			console.log(`My name is ${this.name} and I'm ${this.age} years old`);
		}
	}

	const person01 = new Person('John', 25);
	person01.introduce();
}

function task05() {
	/* Создайте класс BankAccount, который представляет банковский счет.
	 * У него должны быть свойства accountNumber (номер счета) и balance
	 * (баланс), а также методы deposit(amount) для пополнения счета и
	 * withdraw(amount) для снятия денег со счета. Класс должен иметь
	 * также статическое свойство bankName, которое содержит название
	 * банка.
	 */
	/* const account1 = new BankAccount("1234567890", 1000);
	 * account1.deposit(500); // Вывод: Deposited 500 into account
	 * 1234567890. New balance: 1500
	 * account1.withdraw(200); // Вывод: Withdrawn 200 from account
	 * 1234567890. New balance: 1300
	 * account1.withdraw(1500); // Вывод: Insufficient funds in account
	 * 1234567890
	 */

	class BankAccount {
		static bankName = 'The best Bank';
		constructor(accountNumber, balance) {
			this.accountNumber = accountNumber;
			this.balance = balance;
		}
		deposit(amount) {
			this.balance += amount;
			console.log(
				`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance} руб.`
			);
		}
		withdraw(amount) {
			if (this.balance >= amount) {
				this.balance -= amount;
				console.log(
					`Withdrown ${amount} from account ${this.accountNumber}. New balance: ${this.balance} руб.`
				);
			} else {
				console.log(`Insufficient funds in account ${this.accountNumber}`);
			}
		}
		showBalance() {
			console.log(`У Вас на балансе ${this.balance} руб.`);
		}
	}
	const account1 = new BankAccount('1234567890', 1000);

	account1.deposit(500); // Deposited 500 into account 1234567890. New balance: 1500 руб.
	account1.withdraw(200); // Withdrown 200 from account 1234567890. New balance: 1300 руб.
	account1.withdraw(1500); // Insufficient funds in account 1234567890
	account1.showBalance(); // У Вас на балансе 1300 руб.
}

function task06() {
	/* Напишите рекурсивную функцию sumDigits, которая принимает
	 * положительное целое число в качестве аргумента и возвращает
	 * сумму его цифр.
	 */
	/* // Пример использования:
	 * console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
	 * console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
	 * + 7 + 8 + 9)
	 * */
	// ЗАДАЧА РЕШАЛАСЬ НА ПРЕДЫДУЩЕМ СЕМИНАРЕ !!!
}
