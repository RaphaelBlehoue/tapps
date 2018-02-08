import React from 'react';

const styleDiv = {
	position: 'relative',
	zIndex: 29,
	borderLeft: `1px solid #ddd`,
	borderRight: `1px solid #ddd`,
};

const styleHref = {
	color: '#333',
    textTransform: 'uppercase',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '20px',
}

const NavbarBottom = () => (
	<div className="navbar navbar-default bg-grey-200 navbar-xs" style={styleDiv}>
		<ul className="nav navbar-nav no-border visible-xs-block">
			<li><a className="text-center collapsed" data-toggle="collapse" data-target="#navbar-demo-second">
					<i className="icon-circle-down2" />
				</a>
			</li>
		</ul>
		<div className="navbar-collapse collapse" id="navbar-demo-second">
			<p className="navbar-text">
				<a className="navbar-link" style={styleHref}>
					<i className="icon-menu7 position-left" /> Département
				</a>
			</p>
			<div className="navbar-right">
				<ul className="nav navbar-nav">
					<li><a className="navbar-link" style={styleHref}>Toudeal Days</a></li>
					<li><a className="navbar-link" style={styleHref}>Créer ma Boutique</a></li>
					<li><a className="navbar-link" style={styleHref}>Articles en Arrivages</a></li>
					<li><a className="navbar-link" style={styleHref}>Promotions</a></li>
					<li className="dropdown dropdown-user">
						<a className="dropdown-toggle" data-toggle="dropdown" style={styleHref}>
							<span>Plateforme Toudeal</span>
							<i className="caret" />
						</a>
						<ul className="dropdown-menu dropdown-menu-right">
							<li><a><i className="icon-user-plus" /> Name plateforme</a></li>
							<li><a><i className="icon-user-plus" /> Name plateforme</a></li>
							<li><a><i className="icon-user-plus" /> Name plateforme</a></li>
							<li><a><i className="icon-user-plus" /> Name plateforme</a></li>
							<li><a><i className="icon-user-plus" /> Name plateforme</a></li>
							<li><a><i className="icon-user-plus" /> Name plateforme</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
);

export default NavbarBottom;