function listenersOfDeleteButtons() {
	const buttonDelete = document.querySelectorAll('.btn');
	buttonDelete.forEach((button) => {
		button.addEventListener(
			'click',
			(element) => {
				localStorage.removeItem(element.target.parentElement.classList[1]);
				element.target.parentElement.remove();
			},
			{ once: true }
		);
	});
}

export default listenersOfDeleteButtons;
