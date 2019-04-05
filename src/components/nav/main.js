import React, { Fragment } from "react";
import Permalast from "../../assets/images/navbrand.png";
import { Link } from 'react-router-dom';
import SideNav from './sidenav';
import Navbar from 'react-bootstrap/Navbar';



class NavMenu extends React.Component{
    renderLinks(){
        return(
            <Fragment>
                  <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                         <Link to="/">About Us</Link>
                    </li>
                    <li>
                        <Link to="/">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/">Testimony</Link>
                    </li>
                    <li>
                        <Link  to="/">Gallery</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
            </Fragment>
        )
    }
    render(){
        const links = this.renderLinks();
        return(
            <Fragment>
            <div className="Navbar-menu-wrapper">
                <Navbar bg="dark" expand="lg" float="right">
                    <div className="navbrand-icon-container">
                        <img  id="navbrand-icon" src={ Permalast } alt=""/>
                    </div>
                    <Link  data-target="sidenav" className = "sidenav-trigger" to="#">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                     </Link>
                   <ul className="main-link-navbar">
                         {links }
                   </ul>
                </Navbar>;
                <SideNav links = {links}/>
            </div>
      </Fragment>
        )
    }
}

export default NavMenu;