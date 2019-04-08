import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from '../nav/index';
import HomeVid from '../../assets/video/home-video.mp4';
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

    constructor(props){
        super(props)
        this.state= {
            activeClass : false
        }
    }
    componentDidMount = () => {
        window.addEventListener("scroll", this.animateScroll);
    }
    animateScroll = () => {
        let elementTopValue = document.getElementById("landingpage-animate-wrapper").offsetTop;
        if(window.pageYOffset >= elementTopValue + 200){
                    this.setState(()=>({
                       activeClass: true
                    }));
                 console.log(elementTopValue);   
              }
              else{
                this.setState(()=>({
                    activeClass: false
                 }));
              }
    }
    render(){
    

        
        const landingpageWrapper = "landingpage-wrapper";
        const activeStatus = " inactive";
        return(
            <div id="landingpage-animate-wrapper" className={this.state.activeClass ? landingpageWrapper : ( `${activeStatus}  ${landingpageWrapper}`)}>
                 <div className="landingpage-container">
                 <video autoPlay loop muted poster="images/videoFiller1080.jpg" className="backgroundVideo">
                    <source src={HomeVid} type="video/mp4" />
                </video>
                <div className="home-page-houses">
                
                </div>
                    <div className="landingpage-filter"></div>
                        <HamburgerMenu/>
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
                      <h1>Perma<span>[</span>last<span>]</span></h1>
                  </div>
                  <hr/>
                
                </header>
            </div>
            <div className="permalast-subheader">
                      <h3>A Storm is coming. Is your roof ready?</h3>
                  </div>
        </div>
          )
       }   
    }


export default Landingpage;