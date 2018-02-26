import React from 'react';
import PropTypes from 'prop-types';

const CardBarUserProfilWrapper = ({children, profilName, profilImg}) => (
	<li className="dropdown dropdown-user">
		<a className="dropdown-toggle" data-toggle="dropdown">
			<img src={profilImg} alt={profilName} />
			<span>{profilName}</span>
			<i className="caret" />
		</a>
		<ul className="dropdown-menu dropdown-menu-right">
            {children}
		</ul>
	</li>
);

CardBarUserProfilWrapper.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
	profilName: PropTypes.string.isRequired,
	profilImg: PropTypes.number,
};

export default CardBarUserProfilWrapper;
