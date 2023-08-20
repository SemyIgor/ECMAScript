function arrayToPage(array, receivingBlock) {
	array.forEach((user) => {
		receivingBlock.insertAdjacentHTML(
			'beforeend',
			`
         <div class="users-card card${user.id}">
         <p>ID: ${user.id}</p>
         <p>Name: ${user.name}</p>
         <p>Username: ${user.username}</p>
         <p>Company name: ${user.company.name}</p>
         <p>City: ${user.address.city}</p>
         <p>Phone: ${user.phone}</p>
         <button class="btn">Удалить</button>
         </div>
		`
		);
	});
}

export default arrayToPage;
