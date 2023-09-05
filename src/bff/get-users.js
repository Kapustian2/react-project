export const getUsers = (loginToFind) =>
	fetch(`http://localhost:3005/users/?login=${loginToFind}`)
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then(([loadedUser]) => loadedUser);
