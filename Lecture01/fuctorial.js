// n! = (n-1)! * n;
// ...............
// 4! = 3! * 4 = 1 * 2 * 3 * 4;
// 3! = 2! * 3 = 1 * 2 * 3;
// 2! = 1! * 2 = 1 * 2;
// 1! = 0! * 1 = 1;

const fuctorial = (number) => {
	if (number === 1) {
		return 1;
	}
	let res = fuctorial(number - 1) * number;
	return res;
};

console.log(fuctorial(5));
