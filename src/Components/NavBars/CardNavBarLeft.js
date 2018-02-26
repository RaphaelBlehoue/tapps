import React from 'react';
import PropTypes from 'prop-types';

const CardNavBarLeft = ({logo, AltTitle }) => (
    <div className="navbar-header">
		<a className="navbar-brand">
			<img src={logo} alt={AltTitle} />
		</a>
		<ul className="nav navbar-nav pull-right visible-xs-block">
			<li>
				<a data-toggle="collapse" data-target="#navbar-form-inputs">
					<i className="icon-tree5" />
				</a>
			</li>
			<li>
				<a className="sidebar-mobile-main-toggle">
					<i className="icon-paragraph-justify3" />
				</a>
			</li>
			<li>
				<a className="sidebar-mobile-secondary-toggle">
					<i className="icon-more" />
				</a>
			</li>
		</ul>
    </div>
);

CardNavBarLeft.propTypes = {
	logo: PropTypes.node.isRequired,
	AltTitle: PropTypes.string.isRequired
};

export default CardNavBarLeft;