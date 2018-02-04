import React  from 'react';

 const Footer = () => (
     <div className="navbar navbar-default navbar-fixed-bottom footer">
         <ul className="nav navbar-nav visible-xs-block">
             <li><a className="text-center collapsed" data-toggle="collapse" data-target="#footer"><i className="icon-circle-up2"/></a></li>
         </ul>
         <div className="navbar-collapse collapse" id="footer">
             <div className="navbar-text">
                 &copy; 2017. <a className="navbar-link">Webkit Template </a> by <a className="navbar-link" target="_blank">Smart-dev Soft</a>
             </div>
             <div className="navbar-right">
                 <ul className="nav navbar-nav">
                     <li><a>About</a></li>
                     <li><a>Terms</a></li>
                     <li><a>Contact</a></li>
                 </ul>
             </div>
         </div>
     </div>
 );

export default Footer;