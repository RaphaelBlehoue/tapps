import React from 'react';
import PropTypes from 'prop-types';

const CardBarNotificationContent = ({ ImageLink, ImageLabel, UserFullName, BlockCount, TextMessage, TimeAgo }) => (
	<li className="media">
		<div className="media-left">
			<img src={ImageLink} className="img-circle img-sm" alt={ImageLabel} />
			{BlockCount && <span className="badge bg-danger-400 media-badge">{BlockCount}</span>}
		</div>
		<div className="media-body">
			<a className="media-heading">
				<span className="text-semibold">{UserFullName}</span>
				<span className="media-annotation pull-right">{TimeAgo}</span>
			</a>
			<span className="text-muted">{TextMessage}...</span>
		</div>
	</li>
);

CardBarNotificationContent.propTypes = {
	ImageLink: PropTypes.string.isRequired,
	UserFullName: PropTypes.string.isRequired,
	TextMessage: PropTypes.string,
	TimeAgo: PropTypes.node,
	BlockCount:PropTypes.number,
	ImageLabel: PropTypes.string
};

CardBarNotificationContent.defaultProps = {
	BlockCount: '',
	ImageLabel: 'Toudeal',
	TextMessage: '',
	TimeAgo: '',	
};

export default CardBarNotificationContent;