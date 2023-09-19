import { sessions } from '../sessions';
import { getRoles } from '../api';
import { ROLE } from '../constants';

export const fetchRoles = async (hash) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещён',
			response: null,
		};
	}

	const roles = await getRoles();

	return {
		error: null,
		response: roles,
	};
};
