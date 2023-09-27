import { setPostData } from './set-post-data';

export const savePostAsync = (requestServer, newPostData) => async (dispatch) => {
	await requestServer('savePost', newPostData).then((updatedPost) => {
		dispatch(setPostData(updatedPost.response));

		return updatedPost.response;
	});
};
