const Gun = {
	isEmpty: true,
	isOK: true,
	fireGun: function () {
		if (this.isEmpty === false && this.isOK === true) {
			return "I'm firing";
		} else {
			return "I'm not OK";
		}
	},
};
console.log('isEmpty = ', Gun.isEmpty, '\t', 'isOK = ', Gun.isOK);
console.log('Gun: ', Gun.fireGun());

/* // Вызов функции из другой функции в отрыве от её контекста
// с использованием анонимной функции
setTimeout(function () {
	console.log(Gun.fireGun());
}, 2000); 
*/

// Вызов функции из другой функции в отрыве от её контекста
// с использованием анонимной функции (стрелочной)
/* setTimeout(() => {
	console.log(Gun.fireGun());
}, 2000); */

// Вызов функции из другой функции в отрыве от её контекста
// с использованием call-функции
/* setTimeout(() => {
	console.log(Gun.fireGun);
}, 3000); */

const PumpGun = {
	isEmpty: false,
	isOK: true,
	fireGun: Gun.fireGun,
};
console.log('isEmpty = ', PumpGun.isEmpty, '\t', 'isOK = ', PumpGun.isOK);
console.log('PumpGun: ', PumpGun.fireGun());

const Rifle = {
	isEmpty: true,
	isOK: true,
};

Rifle.fireGun = PumpGun.fireGun;
console.log('isEmpty = ', Rifle.isEmpty, '\t', 'isOK = ', Rifle.isOK);
console.log('Rifle: ', Rifle.fireGun());

// Вызов функции из другой функции в отрыве от её контекста
// с использованием call-функции
setTimeout(() => {
	console.log('isEmpty = ', Gun.isEmpty, '\t', 'isOK = ', Gun.isOK);
	console.log('Gun: ', Gun.fireGun.call(PumpGun));
}, 3000);

// Gun.fireGun.bind(PumpGun);
/* setTimeout(() => {
	console.log('isEmpty = ', Gun.isEmpty, '\t', 'isOK = ', Gun.isOK);
	console.log('Gun: ', Gun.fireGun.bind(PumpGun));
}, 3000); */

setTimeout(() => {
	console.log('isEmpty = ', PumpGun.isEmpty, '\t', 'isOK = ', PumpGun.isOK);
	console.log('PumpGun: ', PumpGun.fireGun.bind(Gun));
}, 3000);
/* 
setTimeout(() => {
	console.log('isEmpty = ', Gun.isEmpty, '\t', 'isOK = ', Gun.isOK);
	console.log('Gun: ', Gun.fireGun());
}, 3000); */
