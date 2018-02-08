import React from 'react';

const SecondSideBarComponent = () => (
	<div className="sidebar sidebar-secondary sidebar-default">
		<div className="sidebar-content">
			<div className="sidebar-category">
				<div className="category-content sidebar-user">
					<div className="media">
						<a className="media-left">
							<img src="assets/images/placeholder.jpg" className="img-circle img-sm" alt="" />
						</a>
						<div className="media-body">
							<span className="media-heading text-semibold">Victoria Baker</span>
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
			</div>
			<div className="sidebar-category">
				<div className="category-title">
					<span>Action buttons</span>
				</div>
				<div className="category-content">
					<div className="row">
						<div className="col-xs-6">
							<button className="btn bg-teal-400 btn-block btn-float btn-float-lg" type="button">
								<i className="icon-git-branch" /> <span>Branch</span>
							</button>
							<button className="btn bg-purple-300 btn-block btn-float btn-float-lg" type="button">
								<i className="icon-mail-read" /> <span>Messages</span>
							</button>
						</div>

						<div className="col-xs-6">
							<button className="btn bg-warning-400 btn-block btn-float btn-float-lg" type="button">
								<i className="icon-stats-bars" /> <span>Statistics</span>
							</button>
							<button className="btn bg-blue btn-block btn-float btn-float-lg" type="button">
								<i className="icon-people" /> <span>Users</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default SecondSideBarComponent;