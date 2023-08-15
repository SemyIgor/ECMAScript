task01();
// task02();
// task03();
// task03a();

function task01() {
	/* Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
	 * Свойство name (имя) - строка, имя сотрудника.
	 * Метод displayInfo() - выводит информацию о сотруднике (имя).
	 * Реализуйте класс Manager (менеджер), который наследует класс Employee
	 * и имеет дополнительное свойство и метод:
	 * Свойство department (отдел) - строка, отдел, в котором работает менеджер.
	 * Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере
	 * (имя и отдел).
	 */

	/* // Пример использования классов
	 * const employee = new Employee(""John Smith"");
	 * employee.displayInfo();
	 * // Вывод:
	 * // Name: John Smith
	 *
	 * const manager = new Manager(""Jane Doe"", ""Sales"");
	 * manager.displayInfo();
	 * // Вывод:
	 * // Name: Jane Doe
	 * // Department: Sales
	 */

	class Employee {
		constructor(name) {
			this.name = name;
		}
		displayInfo() {
			console.log(`Имя сотрудника: ${this.name}`);
		}
	}

	class Manager extends Employee {
		constructor(name, department) {
			super(name);
			this.department = department;
		}
		displayInfo() {
			console.log(`Имя сотрудника: ${this.name} \nОтдел: ${this.department}`);
		}
	}

	const employee = new Employee('Михаил Селиванов');
	employee.displayInfo();

	const manager = new Manager('Сергей Петров', 'ПТО');
	manager.displayInfo();
}

function task02() {
	/* Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
	 *
	 * Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
	 * Свойство products (продукты) - массив, содержащий список продуктов в заказе.
	 * Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
	 * Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.
	 */
	/* // Пример использования класса
	 * class Product {
	 * constructor(name, price) {
	 * this.name = name;
	 * this.price = price;
	 * }
	 * }
	 */
	/* const order = new Order(12345);
	 *
	 * const product1 = new Product(""Phone"", 500);
	 * order.addProduct(product1);
	 *
	 * const product2 = new Product(""Headphones"", 100);
	 * order.addProduct(product2);
	 *
	 * console.log(order.getTotalPrice()); // Вывод: 600
	 */
	class Order {
		constructor(orderNumber) {
			this.orderNumber = orderNumber;
			this.products = [];
		}
		addProduct(product) {
			this.products.push(product);
		}

		getTotalPrice() {
			let sum = 0;
			this.products.forEach((product) => {
				sum += product.price;
			});
			return sum;
		}
	}

	class Product {
		constructor(name, price) {
			this.name = name;
			this.price = price;
		}
	}

	const order = new Order(12345);
	const product1 = new Product('Phone', 500);
	order.addProduct(product1);

	const product2 = new Product('Headphones', 100);
	order.addProduct(product2);

	console.log(order.getTotalPrice());
	console.log(order);
}

function task03() {
	/* Задача: Создать класс "Студент",
	 * который имеет приватные свойства "имя", "возраст" и "средний балл".
	 * Класс должен иметь методы для установки и получения значений свойств,
	 * а также метод для вывода информации о студенте.
	 */
	/*    const student = new Student();
	 * student.setName('Питер Паркер);
	 * student.setAge(20);
	 * student.setAverageGrade(85);
	 * student.displayInfo();
	 */

	// Способ 1
	class Student {
		#name = '';
		#age = 0;
		#averageGrade = 0;

		/**
		 * @param {string} name
		 */
		set name(name) {
			this.#name = name;
		}

		/**
		 * @param {number} age
		 */
		set age(age) {
			this.#age = age;
		}

		/**
		 * @param {number} averageGrade
		 */
		set averageGrade(averageGrade) {
			this.#averageGrade = averageGrade;
		}

		displayInfo() {
			console.log(
				`Name: ${this.#name}\nAge: ${this.#age}\nAverage Grade: ${
					this.#averageGrade
				}`
			);
		}
	}

	const student = new Student();
	console.log('student: ', student);
	student.name = 'Питер Паркер';
	student.age = 20;
	student.averageGrade = 85;
	student.displayInfo();
}

function task03a() {
	// Способ 2.
	class Student {
		#name;
		#age;
		#averageGrade;

		get name() {
			return this.#name;
		}

		setName(name) {
			this.#name = name;
		}

		get age() {
			return this.#age;
		}
		setAge(age) {
			this.#age = age;
		}

		get averageGrade() {
			return this.#averageGrade;
		}
		setAverageGrade(averageGrade) {
			this.#averageGrade = averageGrade;
		}

		displayInfo() {
			console.log(
				`Name: ${this.name}\nAge: ${this.age}\nAverage Grade: ${this.averageGrade}`
			);
		}
	}

	const student = new Student();
	console.log('student: ', student);
	student.setName('Питер Паркер');
	student.setAge(20);
	student.setAverageGrade(85);
	student.displayInfo();
}
