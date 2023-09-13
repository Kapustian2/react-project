import { transformUser } from '../transformers';

export const getUser = (loginToFind) =>
	fetch(`http://localhost:3005/users/?login=${loginToFind}`)
		.then((loadedUser) => loadedUser.json())
		.then(
			([loadedUser]) =>
				loadedUser && {
					id: loadedUser.id,
					login: loadedUser.login,
					password: loadedUser.password,
					registeredAt: loadedUser.registed_at,
					roleId: loadedUser.role_id,
				},
		);
