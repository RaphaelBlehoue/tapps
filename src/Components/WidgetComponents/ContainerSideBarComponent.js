import React from 'react';

const ContainerSideBarComponent = () => (
	<div className="sidebar sidebar-main sidebar-default">
		<div className="sidebar-content">
			<div className="sidebar-category sidebar-category-visible">
				<div className="category-title h6">
					<span>Main navigation</span>
				</div>
				<div className="category-content sidebar-user">
					<div className="media">
						<a className="media-left">
							<img
								src={`${process.env.PUBLIC_URL}assets/images/placeholder.jpg`}
								className="img-circle img-sm"
								alt=""
							/>
						</a>
						<div className="media-body">
							<span className="media-heading text-semibold">Raphael</span>
							<div className="text-size-mini text-muted">
								<i className="icon-pin text-size-small" /> &nbsp;Santa Ana, CA
							</div>
						</div>
						<div className="media-right media-middle">
							<ul className="icons-list">
								<li>
									<a>
										<i className="icon-cog3" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="category-content no-padding">
					<ul className="navigation navigation-main navigation-accordion">
						<li className="navigation-header">
							<span>Main</span> <i className="icon-menu" title="Main pages" />
						</li>
						<li>
							<a>
								<i className="icon-home4" /> <span>Dashboard</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
);



export default ContainerSideBarComponent;