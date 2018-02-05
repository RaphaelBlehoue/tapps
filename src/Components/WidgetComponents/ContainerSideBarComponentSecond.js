import React from 'react';

const ContainerSideBarComponentSecond = () => (
	<div className="sidebar sidebar-secondary sidebar-default">
		<div className="sidebar-content">
			<div className="sidebar-category">
				<div className="category-title">
					<span>Search task</span>
				</div>
				<div className="category-content">
					<form>
						<div className="has-feedback has-feedback-left">
							<input type="search" className="form-control" placeholder="Type and hit Enter" />
							<div className="form-control-feedback">
								<i className="icon-search4 text-size-base text-muted" />
							</div>
						</div>
					</form>
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

export default ContainerSideBarComponentSecond;