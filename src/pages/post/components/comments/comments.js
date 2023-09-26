import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { Comment } from './components';
import { Icon } from '../../../../components';
import { SelectUserId } from '../../../../selectors';
import { addCommentAsync } from '../../../../actions';
import { useServerRequest } from '../../../../hooks';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const userId = useSelector(SelectUserId);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onNewCommentAdd = ({ userId, postId, content }) => {
		dispatch(addCommentAsync(requestServer, { userId, postId, content }));
		setNewComment('');
	};

	return (
		<div className={className}>
			<div className="new-comment">
				<textarea
					name="comment"
					value={newComment}
					placeholder="Комментарий..."
					onChange={({ target }) => setNewComment(target.value)}
				></textarea>
				<Icon
					id="fa-paper-plane"
					size="18px"
					margin="0 0 0 10px"
					onClick={() =>
						onNewCommentAdd({ userId, postId, content: newComment })
					}
				/>
			</div>
			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						id={id}
						postId={postId}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	width: 580px;
	margin: 0 auto;

	& .new-comment {
		display: flex;
		width: 100%;
		margin: 20px 0 0;
	}

	& .new-comment textarea {
		width: 550px;
		height: 120px;
		resize: none;
		font-size: 18px;
	}
`;
