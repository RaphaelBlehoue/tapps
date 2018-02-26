import React from 'react';
import PropTypes from 'prop-types'

const CardBarNotificationWrapper = ({children, BlockTitle, TextCount, IconClass}) => (
	<li className="dropdown">
		<a className="dropdown-toggle" data-toggle="dropdown">
			<i className={IconClass}/>
			<span className="visible-xs-inline-block position-right">{BlockTitle}</span>
			<span className="badge bg-warning-400">{TextCount}</span>
		</a>
		<div className="dropdown-menu dropdown-content width-350">
			<div className="dropdown-content-heading">
				{BlockTitle}
				<ul className="icons-list">
					<li>
						<a>
							<i className="icon-compose" />
						</a>
					</li>
				</ul>
			</div>
			<ul className="media-list dropdown-content-body">{children}</ul>
			<div className="dropdown-content-footer">
				<a data-popup="tooltip" title="All messages">
					<i className="icon-menu display-block" />
				</a>
			</div>
		</div>
	</li>
);

CardBarNotificationWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    BlockTitle: PropTypes.string.isRequired,
	TextCount: PropTypes.number.isRequired,
	IconClass: PropTypes.string.isRequired
}

CardBarNotificationWrapper.defaultProps = {
	TextCount: 0
};

export default CardBarNotificationWrapper;