import styled from 'styled-components';
import { Icon } from '../../../components';

const SpecialPanelContainer = ({ className, publishedAt, editButton }) => {
	return (
		<div className={className}>
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
				{editButton}
				<Icon id="fa-trash-o" size="23px" onClick={() => {}} />
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	font-size: 18px;
	margin: ${({ margin }) => margin};

	& i {
		position: relative;
		top: -1px;
	}

	& .published-at {
		display: flex;
		font-size: 18px;
	}

	& .buttons {
		display: flex;
	}
`;
