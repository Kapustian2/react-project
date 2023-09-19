import { addComment, getComments, getPost } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const addPostComment = async (hash, { userId, postId, content }) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODER, ROLE.READER];

	const access = await sessions.access(hash, accessRoles);

	if (access) {
		return {
			error: 'Оставлять комментарий можно только авторизованным пользователям',
			response: null,
		};
	}

	await addComment(userId, postId, content);

	const post = await getPost(postId);

	const comments = await getComments(postId);

	return {
		error: null,
		response: { ...post, comments },
	};
};
