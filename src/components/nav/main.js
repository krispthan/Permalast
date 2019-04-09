import React, { Fragment } from "react";
import Permalast from "../../assets/images/navbrand.png";
import { Link } from 'react-router-dom';
// import SideNav from './sidenav';
import Navbar from 'react-bootstrap/Navbar';



class NavMenu extends React.Component{
    constructor(props){
        super(props)
        this.state={
            activeClass: false
        }
    }
    componentDidMount = () => {
        window.addEventListener("scroll", this.animateScroll);
    }
    animateScroll = (e) => {
        let elementTopValue = document.getElementById("landingpage-animate-wrapper").offsetTop;
        if(window.pageYOffset >= elementTopValue + 500){
                    this.setState(()=>({
                       activeClass: true
                    }));
                 console.log(elementTopValue);   
              } else {
                this.setState(()=>({
                    activeClass: false
                 }));
              }
    }
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
        const navbarActiveStatus = "inactive";
        const navbarMenuWrapper = "Navbar-menu-wrapper";
        return(
            <Fragment>
            <div className={this.state.activeClass ? navbarMenuWrapper : (`${navbarActiveStatus}  ${navbarMenuWrapper}`) }>
                <Navbar  className="Navbar-menu" expand="lg" float="right">
                    <div className="navbrand-icon-container">
                        <img  id="navbrand-icon" src={ Permalast } alt=""/>
                    </div>
                   <ul className="main-link-navbar">
                         {links }
                   </ul>
                </Navbar>;
                {/* <SideNav links = {links}/> */}
            </div>
      </Fragment>
        )
    }
}

export default NavMenu;