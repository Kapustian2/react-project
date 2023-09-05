import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Icon } from '../../../../components';
import { styled } from 'styled-components';
import {
	SelectUserLogin,
	selectUserSession,
	SelectUserRole,
} from '../../../../selectors';
import { ROLE } from '../../../../constants/role';
import { logout } from '../../../../actions/logout';

const RightAlign = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const StyledIcon = styled.div`
	&: hover {
		cursor: pointer;
	}
`;

const UserName = styled.div`
	font-size: 18px;
	font-weight: bold;
	padding: 5px;
`;

const ControlPanelContainer = ({ className }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const roleId = useSelector(SelectUserRole);
	const login = useSelector(SelectUserLogin);
	const session = useSelector(selectUserSession);

	return (
		<div className={className}>
			<RightAlign>
				{roleId === ROLE.GUEST ? (
					<Button>
						<Link to="/login">Войти</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>
						<StyledIcon>
							<Icon
								id="fa-sign-out"
								size="23px"
								margin=""
								onClick={() => dispatch(logout(session))}
							/>
						</StyledIcon>
					</>
				)}
			</RightAlign>
			<RightAlign>
				<StyledIcon onClick={() => navigate(-1)}>
					<Icon id="fa-backward" size="23px" margin="" />
				</StyledIcon>
				<Link to="/post">
					<Icon id="fa-pencil-square" size="23px" margin="" />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" size="23px" margin="" />
				</Link>
			</RightAlign>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
