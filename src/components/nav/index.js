import React from 'react';
import {  NavbarBrand } from 'reactstrap';

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
                        <button type="button" className="navbar-toggle collapsed navbar-btn" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        </div>
                    </div>
                </nav>
                <NavbarBrand href="/" className="navbrand-container">
                            <img  id="navbrand-image" src="../../assets/images/navbrand.png" alt=""/>
                </NavbarBrand>
            </div>
        )
    }
}

export default Navbar;