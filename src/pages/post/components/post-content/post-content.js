import { styled } from 'styled-components';
import { Icon } from '../../../../components';

const PostContentContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<h2>{title}</h2>
			<div className="special-panel">
				<div className="published-at">
					<Icon
						id="fa-calendar-o"
						size="18px"
						margin="0 10px 0 0"
						onClick={() => {}}
					/>
					{publishedAt}
				</div>
				<div className="buttons">
					<Icon
						id="fa-pencil-square-o"
						size="23px"
						margin="0 0 0 20px"
						onClick={() => {}}
					/>
					<Icon id="fa-trash-o" size="23px" onClick={() => {}} />
				</div>
			</div>
			<div className="post-text">{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .special-panel {
		display: flex;
		justify-content: space-between;
		margin: -20px 0 20px;
		font-size: 18px;
	}
	& .published-at {
		display: flex;
	}

	& i {
		position: relative;
		top: -1px;
	}
	& .buttons {
		display: flex;
	}

	& .post-text {
		font-size: 18px;
	}
`;
