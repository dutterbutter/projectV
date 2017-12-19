import React from 'react';

class TopNav extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">
                        <img className="logo" src="/validatorlogo.svg" alt="logo" height="35" width="35" />

                    </a>
                    <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>

                    <ul className="side-nav" id="mobile-demo">
                        <li>
                            <a href="#overview">
                                <i className="material-icons">info_outline</i>
                                Overview
                            </a>
                        </li>
                        <li><a href="#how">
                            <i className="material-icons">star</i>
                            How To Delegate</a>
                        </li>
                        <li><a href="#sentry">
                            <i className="material-icons">perm_scan_wifi</i>
                            Sentry Nodes</a>
                        </li>
                        <li><a href="#validator"><i className="material-icons">network_check</i>
                            Validator Node</a>
                        </li>
                        <li><a href="#dev"><i className="material-icons">system_update_alt</i>
                            Development Updates</a>
                        </li>
                        <li className="bottom"><a href=""><i className="material-icons">email</i>
                            validatorvault[at]gmail.com</a></li>
                    </ul>
                    
                </div>
            </nav>
        )
    }
}
export default TopNav;