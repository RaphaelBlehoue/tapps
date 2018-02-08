import React from 'react';
import CarouselComponent from '../CarouselAndSlides/CarouselComponent'
import FeedProductComponent from './FeedProductComponent';


const FeedBodyComponent = () => (
	<div className="content-wrapper">
		<div className="navbar navbar-default navbar-xs navbar-component">
			<ul className="nav navbar-nav no-border visible-xs-block">
				<li>
					<a className="text-center collapsed" data-toggle="collapse" data-target="#navbar-filter">
						<i className="icon-menu7" />
					</a>
				</li>
			</ul>
			<div className="navbar-collapse collapse" id="navbar-filter">
				<p className="navbar-text">Filter:</p>
				<ul className="nav navbar-nav">
					<li className="dropdown">
						<a className="dropdown-toggle" data-toggle="dropdown">
							<i className="icon-sort-time-asc position-left" /> By date <span className="caret" />
						</a>
						<ul className="dropdown-menu">
							<li>
								<a>Show all</a>
							</li>
							<li>
								<a>Today</a>
							</li>
							<li>
								<a>Yesterday</a>
							</li>
							<li>
								<a>This week</a>
							</li>
							<li>
								<a>This month</a>
							</li>
							<li>
								<a>This year</a>
							</li>
						</ul>
					</li>
					<li className="dropdown">
						<a className="dropdown-toggle" data-toggle="dropdown">
							<i className="icon-sort-amount-desc position-left" /> By status <span className="caret" />
						</a>
						<ul className="dropdown-menu">
							<li>
								<a>Show all</a>
							</li>
							<li>
								<a>Open</a>
							</li>
							<li>
								<a>On hold</a>
							</li>
							<li>
								<a>Resolved</a>
							</li>
							<li>
								<a>Closed</a>
							</li>
							<li>
								<a>Dublicate</a>
							</li>
							<li>
								<a>Invalid</a>
							</li>
							<li>
								<a>Wontfix</a>
							</li>
						</ul>
					</li>
					<li className="dropdown">
						<a className="dropdown-toggle" data-toggle="dropdown">
							<i className="icon-sort-numeric-asc position-left" /> By priority <span className="caret" />
						</a>
						<ul className="dropdown-menu">
							<li>
								<a>Show all</a>
							</li>
							<li>
								<a>Highest</a>
							</li>
							<li>
								<a>High</a>
							</li>
							<li>
								<a>Normal</a>
							</li>
							<li>
								<a>Low</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<CarouselComponent />
		<FeedProductComponent />
		<FeedProductComponent />
		<FeedProductComponent />
		<FeedProductComponent />
		<FeedProductComponent />
		<FeedProductComponent />
	</div>
);

export default FeedBodyComponent;