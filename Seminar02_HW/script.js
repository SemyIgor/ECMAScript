task01();
// task02();
// task03();

function task01() {
	/*    Задание 1: ""Управление библиотекой книг""
	 *
	 * Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
	 *
	 * Свойство title (название) - строка, название книги.
	 * Свойство author (автор) - строка, имя автора книги.
	 * Свойство pages (количество страниц) - число, количество страниц в книге.
	 * Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц)
	 */
	class Book {
		title = '';
		author = '';
		pages = 0;

		constructor(title, author, pages) {
			this.title = title;
			this.author = author;
			this.pages = pages;
		}

		displayInfo = () => {
			console.log(`
            Название: ${this.title} 
            Автор: ${this.author} 
            Количество страниц: ${this.pages}`);
		};
	}

	const MyFirstBook = new Book(
		'Доктор Айболит',
		'Корней Иванович Чуковский',
		128
	);
	MyFirstBook.displayInfo();
}

function task02() {
	/*    Задание 2: ""Управление списком студентов""
	 * Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:
	 *
	 * Свойство name (имя) - строка, имя студента.
	 * Свойство age (возраст) - число, возраст студента.
	 * Свойство grade (класс) - строка, класс, в котором учится студент.
	 * Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
	 * javascript
	 */
	/* 	// Пример использования класса
	 * const student1 = new Student(""John Smith"", 16, ""10th grade"");
	 * student1.displayInfo();
	 * // Вывод:
	 * // Name: John Smith
	 * // Age: 16
	 * // Grade: 10th grade
	 *
	 * const student2 = new Student(""Jane Doe"", 17, ""11th grade"");
	 * student2.displayInfo();
	 * // Вывод:
	 * // Name: Jane Doe
	 * // Age: 17
	 * // Grade: 11th grade"
	 */

	class Student {
		name = '';
		age = null;
		grade = '';

		constructor(name, age, grade) {
			this.name = name;
			this.age = age;
			this.grade = grade;
		}

		displayInfo = () => {
			console.log(
				`
Name: ${this.name}
Age: ${this.age}
Grade: ${this.grade}
				`
			);
		};
	}

	const student01 = new Student();
	student01.name = 'John Smith';
	student01.age = 16;
	student01.grade = '10th grade';

	const student02 = new Student('Jane Doe', 17, '11th grade');

	student01.displayInfo();
	student02.displayInfo();
}

function task03() {
	/* Создайте класс "Банк", который будет иметь следующие свойства:
	 * название банка, список клиентов и список счетов. Класс должен иметь методы для
	 * добавления нового клиента,
	 * открытия нового счета для клиента,
	 * пополнения счета,
	 * снятия денег со счета
	 * и проверки баланса.
	 */

	/* Пример работы:
	 *
	 * const bank = new Bank("Мой Банк");
	 *
	 * const client1 = new Client("Иван", 25);
	 * const client2 = new Client("Мария", 30);
	 *
	 * bank.addClient(client1);
	 * bank.addClient(client2);
	 *
	 * bank.openAccount(client1, 1000);
	 * bank.openAccount(client2, 500);
	 *
	 * bank.deposit(123456789, 200);
	 * bank.withdraw(987654321, 100);
	 * bank.checkBalance(123456789);
	 * bank.checkBalance(987654321);
	 */

	class Bank {
		clients = [];
		accounts = [];
		constructor(bankName) {
			this.bankName = bankName;
		}

		addClient(client) {
			this.clients.push(client);
			console.log(
				`Клиент ${client.name}, возраст ${client.age} добавлен в базу банка`
			);
		}
		openAccount(client, amount) {
			if (!this.clients.includes(client)) {
				console.log(
					`В банке клиент ${client.name} возраст ${client.age} не зарегистрирован`
				);
			} else {
				const account = new Account(client, amount);
				this.accounts.push(account);
				console.log(
					`Открыт счёт №${account.account} для клиента ${client.name}, возраст ${client.age} на сумму ${amount}`
				);
			}
		}
		deposit(account, amount) {
			let flag = false;
			this.accounts.forEach((el) => {
				if (el.account === account) {
					el.amount += amount;
					console.log(`Сумма ${amount} зачислена на счёт ${account}`);
					flag = true;
				}
			});
			if (!flag) {
				console.log(`В банке счёт ${account} не зарегистрирован`);
			}
		}
		withdraw(account, amount) {
			let flagIsAccount = false;
			let flagEnoughMoney = true;
			this.accounts.forEach((el) => {
				if (el.account === account) {
					flagIsAccount = true;
					if (el.amount >= amount) {
						el.amount -= amount;
						console.log(`Сумма ${amount} снята со счёта ${account}`);
					} else {
						flagEnoughMoney = false;
					}
				}
			});
			if (!flagIsAccount) {
				console.log(`В банке счёт ${account} не зарегистрирован`);
			} else if (!flagEnoughMoney) {
				console.log(
					`На счёте ${account} недостаточно средств для такой операции`
				);
			}
		}
		checkBalance(account) {
			let flag = false;
			this.accounts.forEach((el) => {
				if (el.account === account) {
					console.log(`Остаток на счёте ${el.account} равен ${el.amount}`);
					flag = true;
				}
			});
			if (!flag) {
				console.log(`В банке счёт ${account} не зарегистрирован`);
			}
		}
	}

	class Account {
		constructor(client, amount) {
			this.keySyph = 123456;
			this.client = client;
			this.amount = amount;
			this.account = Account.accauntId++;
		}
	}

	class Client {
		constructor(name, age) {
			this.name = name;
			this.age = age;
			console.log(`Создан клиент ${this.name}, возраст ${this.age}`);
		}
	}
	Account.accauntId = 155000;

	// Создадим банк
	const myBank = new Bank('Мой Банк');
	console.log(`Создан банк "${myBank.bankName}"`);
	console.log('myBank: ', myBank);

	// Создадим клиентов
	const client01 = new Client('Сергей', 35);
	const client02 = new Client('Иван', 25);
	const client03 = new Client('Мария', 22);

	// Добавим клиентов в базу банка
	myBank.addClient(client01);
	myBank.addClient(client02);

	// Откроем счёт
	myBank.openAccount(client01, 500);
	myBank.openAccount(client02, 1000);
	myBank.openAccount(client03, 2500);

	// Второй счёт у клиента
	myBank.openAccount(client02, 4000);

	// Добавим сумму на счёт
	myBank.deposit(155001, 300);
	myBank.deposit(155000, 700);
	myBank.deposit(155002, 30000);

	// Снимим сумму со счёта
	myBank.withdraw(155001, 300);
	myBank.withdraw(155000, 700);
	myBank.withdraw(155000, 30000); // На счёте недостаточно средств
	myBank.withdraw(155002, 30000);

	myBank.checkBalance(155000);
	myBank.checkBalance(155001);
	myBank.checkBalance(155002);
	myBank.checkBalance(155003);

	//
	console.log('myBank.accounts: ', myBank.accounts);
	console.log('myBank.clients: ', myBank.clients);
}
