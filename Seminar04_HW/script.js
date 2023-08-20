import arrayToPage from './modules/arrayToPage.js';
import listenersOfDeleteButtons from './modules/listenersOfDeleteButtons.js';
import { getDatabaseToLocalStorage } from './modules/getDatabaseToLocalStorage.js';
import storageToArray from './modules/storageToArray.js';
import refreshData from './modules/refreshData.js';
import getDog from './modules/getDog.js';

task01();
// task02();
function task01() {
	/* 1. Необходимо получить список всех пользователей
	 *    с помощью бесплатного API (https://jsonplaceholder.typicode.com/users)
	 * 2. и отобразить их на странице.
	 * 3. Пользователь должен иметь возможность удалить любого пользователя из списка.
	 * 4. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage.
	 * 5. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage
	 */

	const usersURL = 'https://jsonplaceholder.typicode.com/users';
	const cards = document.querySelector('.cards');
	const refreshDataBtn = document.querySelector('.refreshDataBtn');
	const arrayOfStorageData = [];

	getDatabaseToLocalStorage(usersURL);
	storageToArray(arrayOfStorageData);

	arrayToPage(arrayOfStorageData, cards);

	listenersOfDeleteButtons();

	refreshDataBtn.addEventListener('click', () => {
		console.log('arrayOfStorageData: ', arrayOfStorageData);
		refreshData(arrayOfStorageData);
		getDatabaseToLocalStorage(usersURL);
		storageToArray(arrayOfStorageData);
		arrayToPage(arrayOfStorageData, cards);
		listenersOfDeleteButtons();
	});
}

function task02() {
	/* Необходимо реализовать отрисовку 10 картинок собак 
   из API https://dog.ceo/dog-api/ с интервалом в 3 секунды. 
   */

	const refreshDataBtn = document.querySelector('.refreshDataBtn');
	refreshDataBtn.remove();

	const dogsURL = 'https://dog.ceo/api/breeds/image/random';
	for (let index = 0; index < 10; index++) {
		// setTimeout(getDog, 3000 * index, dogsURL);
		setTimeout(getDog, 2000 * index, dogsURL);
	}
	// getDog(dogsURL);
	// setInterval(getDog, 3000, dogsURL);
}
