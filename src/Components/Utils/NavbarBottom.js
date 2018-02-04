import React from 'react';

const styleDiv = {
	position: 'relative',
	zIndex: 29,
	borderLeft: `1px solid #ddd`,
	borderRight: `1px solid #ddd`,
};

const NavbarBottom = () => (
	<div className="navbar navbar-default bg-grey-200 navbar-xs" style={styleDiv}>
		<ul className="nav navbar-nav no-border visible-xs-block">
			<li>
				<a className="text-center collapsed" data-toggle="collapse" data-target="#navbar-demo-second">
					<i className="icon-circle-down2" />
				</a>
			</li>
		</ul>
		<div className="navbar-collapse collapse" id="navbar-demo-second">
			<p className="navbar-text">
				<i className="icon-user-check position-left" /> Signed in as{' '}
				<a className="navbar-link">Victoria Baker</a>
			</p>
			<div className="navbar-right">
				<ul className="nav navbar-nav">
					<li className="dropdown dropdown-user">
						<a className="dropdown-toggle" data-toggle="dropdown">
							<img src="assets/images/placeholder.jpg" alt="" />
							<span>Victoria</span>
							<i className="caret" />
						</a>
						<ul className="dropdown-menu dropdown-menu-right">
							<li>
								<a>
									<i className="icon-user-plus" /> My profile
								</a>
							</li>
							<li>
								<a>
									<i className="icon-coins" /> My balance
								</a>
							</li>
							<li>
								<a>
									<span className="badge badge-warning pull-right">58</span>{' '}
									<i className="icon-comment-discussion" /> Messages
								</a>
							</li>
							<li className="divider" />
							<li>
								<a>
									<i className="icon-cog5" /> Account settings
								</a>
							</li>
							<li>
								<a>
									<i className="icon-switch2" /> Logout
								</a>
							</li>
						</ul>
					</li>
					<li className="dropdown">
						<a className="dropdown-toggle" data-toggle="dropdown">
							<i className="icon-gear" />
							<span className="visible-xs-inline-block position-right">Settings</span>
							<span className="caret" />
						</a>
						<ul className="dropdown-menu dropdown-menu-right">
							<li>
								<a>Action</a>
							</li>
							<li>
								<a>Another action</a>
							</li>
							<li>
								<a>Something else here</a>
							</li>
							<li>
								<a>One more line</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
);

export default NavbarBottom;