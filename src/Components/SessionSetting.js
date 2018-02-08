import React  from 'react';

const SessionSetting = () => (
    <li className="dropdown dropdown-user">
        <a className="dropdown-toggle" data-toggle="dropdown">
            <img src= {`${process.env.PUBLIC_URL}assets/images/placeholder.jpg`} alt="" />
            <span>Victoria</span>
            <i className="caret"/>
        </a>
        <ul className="dropdown-menu dropdown-menu-right">
            <li><a><i className="icon-user-plus"/> My profile</a></li>
            <li><a><i className="icon-coins"/> My balance</a></li>
            <li><a><span className="badge bg-teal-400 pull-right">58</span> <i className="icon-comment-discussion"/> Messages</a></li>
            <li className="divider"/>
            <li><a><i className="icon-cog5"/> Account settings</a></li>
            <li><a><i className="icon-switch2"/> Logout</a></li>
        </ul>
    </li>
);

export default SessionSetting;