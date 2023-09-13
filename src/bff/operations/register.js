import { sessions } from '../sessions';
import { getUser, addUser } from '../api';

export const register = async (regLogin, regPassword) => {
	const existedUser = await getUser(regLogin);

	if (existedUser) {
		return {
			error: 'Такой пользователь уже есть',
			response: null,
		};
	}

	const user = await addUser(regLogin, regPassword);
	console.log(user);
	return {
		error: null,
		response: {
			id: user.id,
			login: user.login,
			roleId: user.role_id,
			session: sessions.create(user),
		},
	};
};
