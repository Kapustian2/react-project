import { deleteComment, getComments, getPost } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const removePostComment = async (hash, postId, id) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODER];

	const access = await sessions.access(hash, accessRoles);

	if (access) {
		return {
			error: 'Доступ запрещён',
			response: null,
		};
	}

	await deleteComment(id);

	const post = await getPost(postId);

	const comments = await getComments(postId);

	return {
		error: null,
		response: { ...post, ...comments },
	};
};
