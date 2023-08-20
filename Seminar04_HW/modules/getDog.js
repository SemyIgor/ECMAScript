async function getDog(dogsURL) {
	const getDog = async (dogsURL) => {
		const response = await fetch(dogsURL);
		const dogsData = await response.json();
		return dogsData;
	};

	try {
		const cards = document.querySelector('.cards');
		const dog = await getDog(dogsURL);
		cards.insertAdjacentHTML(
			'beforeend',
			`<div class = "img-block">
			<img src="${dog.message}" alt="dogs picture">
			</div>
      `
		);
		// console.log(dog.message);
	} catch (error) {
		console.log('Что-то пошло не так :(');
	}
}

export default getDog;
