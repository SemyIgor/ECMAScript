function refreshData(array) {
	const cardsToRemove = document.querySelectorAll('.users-card');
	cardsToRemove.forEach((card) => {
		card.remove();
	});
	localStorage.clear();
	array.forEach((element) => {
		element = null;
	});
}

export default refreshData;
