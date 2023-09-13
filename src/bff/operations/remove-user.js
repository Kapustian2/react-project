import { deleteUser } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';

export const removeUser = async (userSession, userId, newUserRoleId) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещён',
			response: null,
		};
	}
	deleteUser(userId, newUserRoleId);
	return {
		error: null,
		response: true,
	};
};
