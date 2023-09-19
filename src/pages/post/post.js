import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PostContent, Comments } from './components';
import { loadPostAsync } from '../../actions';
import { useServerRequest } from '../../hooks';
import { selectPost } from '../../selectors';
import { styled } from 'styled-components';

const PostContainer = ({ className }) => {
	const post = useSelector(selectPost);
	const dispatch = useDispatch();
	const params = useParams();
	const requestServer = useServerRequest();

	useEffect(() => {
		dispatch(loadPostAsync(requestServer, params.id));
	}, [dispatch, requestServer, params.id]);

	return (
		<div className={className}>
			<PostContent post={post} />
			<Comments comments={post.comments} postId={params.id} />
		</div>
	);
};

export const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 40px 80px;
`;
