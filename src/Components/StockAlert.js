import React from 'react';

const StockAlert = () => (
    <li className="dropdown">
        <a  className="dropdown-toggle" data-toggle="dropdown">
            <i className="icon-git-compare"/>
            <span className="visible-xs-inline-block position-right">Git updates</span>
            <span className="badge bg-warning-400">9</span>
        </a>
        <div className="dropdown-menu dropdown-content">
            <div className="dropdown-content-heading">
                Git updates
                <ul className="icons-list">
                    <li><a ><i className="icon-sync"/></a></li>
                </ul>
            </div>
            <ul className="media-list dropdown-content-body width-350">
                <li className="media">
                    <div className="media-left">
                        <a  className="btn border-primary text-primary btn-flat btn-rounded btn-icon btn-sm"><i className="icon-git-pull-request"/></a>
                    </div>
                    <div className="media-body">
                        Drop the IE <a >specific hacks</a> for temporal inputs
                        <div className="media-annotation">4 minutes ago</div>
                    </div>
                </li>
                <li className="media">
                    <div className="media-left">
                        <a  className="btn border-warning text-warning btn-flat btn-rounded btn-icon btn-sm"><i className="icon-git-commit"/></a>
                    </div>
                    <div className="media-body">
                        Add full font overrides for popovers and tooltips
                        <div className="media-annotation">36 minutes ago</div>
                    </div>
                </li>
            </ul>
            <div className="dropdown-content-footer">
                <a  data-popup="tooltip" title="All activity"><i className="icon-menu display-block"/></a>
            </div>
        </div>
    </li>
 );

export default StockAlert