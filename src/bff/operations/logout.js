import { sessions } from '../sessions';

export const logout = async (UserSession) => {
	sessions.remove(UserSession);
};
