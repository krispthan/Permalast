import React from 'react';
import {  NavbarBrand } from 'reactstrap';
import Permalast from '../../assets/images/navbrand.png';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        
        this.STATE= {
            collapsed:  true
        }
       
    }

    toggleNavBar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    render(){
        return(
            <div>
                <nav className="navbar-container">
                    <div className="container">
                        <div className="navbar-header">
                            <div className="icon-bar"></div>
                            <div className="icon-bar"></div>
                            <div className="icon-bar"></div>
                        </div>
                    </div>
                </nav>
                <div className="navbrand-container">
                    <img  id="navbrand-image" src={ Permalast } alt=""/>
                </div>
            </div>
        )
    }
}

export default Navbar;