import React from 'react';
import MessageNotification from '../WidgetComponents/MessageNotification';
import SessionSetting from '../WidgetComponents/SessionSetting';
import logo from "../../logo-toudeal-svg.svg";
import NavbarBottom from '../WidgetComponents/NavbarBottom';


const styleDivs = {
    position: 'relative', 
    zIndex: 30
}



const Navbar = () => (
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
);

export default Navbar;