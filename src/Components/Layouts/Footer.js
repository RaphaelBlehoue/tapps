import React  from 'react';

 const Footer = () => (
     <div className="navbar navbar-default navbar-fixed-bottom footer">
         <ul className="nav navbar-nav visible-xs-block">
             <li><a className="text-center collapsed" data-toggle="collapse" data-target="#footer"><i className="icon-circle-up2"/></a></li>
         </ul>
         <div className="navbar-collapse collapse" id="footer">
             <div className="navbar-text">
                 &copy; 2018. <a className="navbar-link">Toudeal Group Corporation </a> by <a className="navbar-link" target="_blank">Site web</a>
             </div>
             <div className="navbar-right">
                 <ul className="nav navbar-nav">
                     <li><a>Le Groupe</a></li>
                     <li><a>{`Politique d'utilisation`}</a></li>
                     <li><a>Nous contactez</a></li>
                 </ul>
             </div>
         </div>
     </div>
 );
 
export default Footer;