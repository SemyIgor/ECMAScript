function storageToArray(arrayOfStorage) {
	for (let index = 0; index < localStorage.length; index++) {
		arrayOfStorage.push(
			JSON.parse(localStorage.getItem(localStorage.key(index)))
		);
	}
}

export default storageToArray;
