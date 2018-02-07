import React from 'react';
import MessageNotification from '../WidgetComponents/MessageNotification';
import SessionSetting from '../WidgetComponents/SessionSetting';
import logo from "../../logo-toudeal-svg.svg";
import NavbarBottom from '../WidgetComponents/NavbarBottom';
import Headroom from "../../../node_modules/react-headroom/dist/index";


const styleDivs = {
    position: 'relative', 
    zIndex: 100
}

const animationTransition = {
  webkitTransition: 'all .5s ease-in-out',
  mozTransition: 'all .5s ease-in-out',
  oTransition: 'all .5s ease-in-out',
  transition: 'all .5s ease-in-out',
}


const Navbar = () => (
	<Headroom style={animationTransition}>
		<div className="content-group-lg">
			<div className="navbar-component">
				<div className="navbar navbar-inverse p-5" style={styleDivs}>
					<div className="navbar-header">
						<a className="navbar-brand">
							<img src={logo} alt="toudeal group coporation" />
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
					<div className="navbar-collapse collapse" id="navbar-form-inputs">
						<form className="navbar-form navbar-left col-md-10">
							<div className="form-group">
								<div className="input-group">
									<div>
										<input
											type="text"
											className="form-control input-xlg input-xlg-2"
											placeholder="Search our knowledgebase"
										/>
									</div>
									<div className="input-group-btn">
										<button type="submit" className="btn btn-primary btn-xlg">
											<i className="icon-search4 text-size-base" />
										</button>
									</div>
								</div>
							</div>
						</form>
						<ul className="nav navbar-nav navbar-right">
							<MessageNotification />
							<MessageNotification />
							<MessageNotification />
							<SessionSetting />
						</ul>
					</div>
				</div>
				<NavbarBottom />
			</div>
		</div>
	</Headroom>
);

export default Navbar;