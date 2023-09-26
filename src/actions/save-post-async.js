import { setPostData } from './set-post-data';

export const savePostAsync = (requestServer, newPostData) => async (dispatch) => {
	try {
		await requestServer('savePost', newPostData).then((updatedPost) => {
			dispatch(setPostData(updatedPost.response));
		});
		return 'success';
	} catch (error) {
		throw error;
	}
};
