import { sessions } from '../sessions';
import { getUsers } from '../api';
import { ROLE } from '../constants';

export const fetchUsers = async (userSession) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещён',
			response: null,
		};
	}

	const users = await getUsers();

	return {
		error: null,
		response: users,
	};
};
