export async function getDatabaseToLocalStorage(usersURL) {
	const getUsers = async (usersURL) => {
		const response = await fetch(usersURL);
		const usersData = await response.json();
		return usersData;
	};

	try {
		const users = await getUsers(usersURL);
		users.forEach((user) => {
			localStorage.setItem(`card${user.id}`, JSON.stringify(user));
		});
	} catch (error) {
		console.log('Что-то пошло не так :(');
	}
}
