const generateDate = () =>
	new Date(Math.random() * 1000000000000 + 1999999999999)
		.toISOString()
		.substring(0, 16)
		.replace('T', ' ');

export const addUser = (login, password) =>
	fetch('http://localhost:3005/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			login,
			password,
			registed_at: generateDate(),
			role_id: '1',
		}),
	}).then((response) => {
		if (!response.ok) {
			throw new Error('Ошибка запроса');
		}
		return response.json();
	});
