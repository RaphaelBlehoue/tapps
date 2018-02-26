import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TagNavLink = ({NameLink, PathLink, BadgeCount, BadgeClass, isBadge, IconClass}) => (
		<li>
            <Link to={PathLink}>
                {isBadge && <span className={BadgeClass}>{BadgeCount}</span>}
				<i className={IconClass} /> {NameLink}
			</Link>
		</li>
);

TagNavLink.propTypes = {
	NameLink: PropTypes.string.isRequired,
	PathLink: PropTypes.string.isRequired,
	BadgeCount: PropTypes.number,
	IconClass: PropTypes.string,
	BadgeClass: PropTypes.string,
	isBadge: PropTypes.bool
};

TagNavLink.defaultProps = {
	BadgeCount: 0,
	BadgeClass: 'badge bg-teal-400 pull-right',
	IconClass: '',
	isBadge: false
};

export default TagNavLink;