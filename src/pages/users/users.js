import { useEffect, useState } from 'react';
import { Content } from '../../components';
import { UserRow, TableRow } from './components';
import { useServerRequest } from '../../hooks/';
import { ROLE } from '../../constants';
import styled from 'styled-components';

const UsersContainer = ({ className }) => {
	const [roles, setRoles] = useState([]);
	const [users, setUsers] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);

	const requestServer = useServerRequest();

	useEffect(() => {
		Promise.all([requestServer('fetchUsers'), requestServer('fetchRoles')]).then(
			([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error);
					return;
				}
				setUsers(usersRes.response);
				setRoles(rolesRes.response);
			},
		);
	}, [requestServer, shouldUpdateUserList]);

	const onUserRemove = (userId) => {
		requestServer('removeUser', userId).then(() => {
			setShouldUpdateUserList(!shouldUpdateUserList);
		});
	};

	return (
		<div className={className}>
			<Content error={errorMessage}>
				<h2>Список пользователей</h2>
				<div>
					<TableRow>
						<div className="login-column">Логин</div>
						<div className="registered-column">Дата регистрации</div>
						<div className="role-column">Роль</div>
					</TableRow>
					{users?.map(({ id, login, registeredAt, roleId }) => (
						<UserRow
							key={id}
							id={id}
							login={login}
							registeredAt={registeredAt}
							roleId={roleId}
							roles={roles.filter(
								({ id: roleId }) => roleId !== ROLE.GUEST,
							)}
							onUserRemove={() => onUserRemove(id)}
						/>
					))}
				</div>
			</Content>
		</div>
	);
};

export const Users = styled(UsersContainer)`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	align-items: center;
	width: 570px;
	font-size: 18px;
`;
