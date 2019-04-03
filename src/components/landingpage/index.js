import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import LandingpageFooter from './../landingpage_footer/index';
class Landingpage extends React.Component{
    renderLinks(){
        return (
            <Fragment>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="aboutus">About Us</Link>
                    </li>
                    {/* <li>
                        <Link to="testimony">Testimony</Link>
                    </li>
                    <li>
                        <Link to="blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="gallery">Gallery</Link>
                    </li> */}
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>
            </Fragment>
        )
    } 

      
    render(){
        // const links = this.renderLinks();
        return(
            <div className="landingpage-wrapper">
                 <div className="landingpage-container">
                    <div className="landingpage-filter"></div>
                        <header className="nav-text-container">
                            <div className="nav-text">
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Testimonials</li>
                                    <li>Blog</li>
                                    <li>Gallery</li>
                                    <li>Contact</li>
                                </ul>
                                {/* { links } */}
                          </div>
                  <hr/>
                  <div className="permalast-title">
                      <h1>Perma <span>[</span>last<span>]</span></h1>
                  </div>
                  <hr/>
                  <div className="permalast-subheader">
                      <h3>A Storm is coming. Is your roof read?</h3>
                  </div>
                </header>
            </div>
            <LandingpageFooter/>
        </div>
          )
       }   
    }


export default Landingpage;