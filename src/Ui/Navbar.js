import React from 'react';
import MessageNotification from './Notifications/MessageNotification';
import SessionSetting from './Settings/SessionSetting';

const divStyle = {
    position: 'relative',
    zIndex: 20,
};


const Navbar = () => (
    <div className="navbar navbar-inverse p-5 navbar-component" style={divStyle}>
        <div className="navbar-header">
            <a className="navbar-brand" href="index.html">
            <img src="assets/images/logo_light.png" alt=""/>
            </a>
            <ul className="nav navbar-nav pull-right visible-xs-block">
                <li><a data-toggle="collapse" data-target="#navbar-form-inputs"><i className="icon-menu2"/></a></li>
            </ul>
		</div>
        <div className="navbar-collapse collapse" id="navbar-form-inputs">
            <form className="navbar-form navbar-left col-md-10">
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-btn">
                            <button type="button" className="btn btn-primary btn-xlg dropdown-toggle btn-icon" data-toggle="dropdown">
                                <span>Liste <i className="caret" /></span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a>Action</a></li>
                                <li><a>Another action</a></li>
                                <li><a>Something else here</a></li>
                                <li><a>One more line</a></li>
                            </ul>
                        </div>
                        <div>
                            <input type="text" className="form-control input-xlg input-xlg-2" placeholder="Search our knowledgebase"/>
                        </div>
                        <div className="input-group-btn">
                            <button type="submit" className="btn btn-primary btn-xlg"><i className="icon-search4 text-size-base" /></button>
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
);

export default Navbar;