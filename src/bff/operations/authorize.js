import { sessions } from '../sessions';
import { getUser } from '../api';

export const authorize = async (authLogin, authPassword) => {
	const user = await getUser(authLogin);

	if (!user) {
		return {
			error: 'Такой пользователь не найден',
			response: null,
		};
	}

	const { id, login, password, registeredAt, roleId } = user;

	if (authPassword !== password) {
		return {
			error: 'Неверный пароль',
			response: null,
		};
	}

	return {
		error: null,
		response: {
			id,
			login,
			registeredAt,
			roleId,
			session: sessions.create(user),
		},
	};
};
