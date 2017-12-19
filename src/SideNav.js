import React from 'react';

class SideNav extends React.Component {
    render() {
        return (
            
            <div id="wrapper">
            <div id="side-bar" className="toc-wrapper col hide-on-small-only m3 l3">
                 <div className="bs-sidebar hoverable">
                    <ul className="section table-of-contents affix">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#how">How To Delegate</a></li>
                        <li><a href="#sentry">Sentry Nodes</a></li>
                        <li><a href="#validator">Validator Node</a></li>
                        <li><a href="#dev">Development Updates</a></li>
                    </ul>
                    <div className="bs-sidebar__contact">
                        <div className="bs-sidebar__info">
                        <span className="email"><i className="material-icons">email</i>validatorvault[at]gmail.com</span>
                        </div>
                    </div>
                    </div>
                    </div>
                </div> 
            
        )
    }
}
export default SideNav;