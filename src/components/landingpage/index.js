import React from 'react';
// import { Link, Redirect } from 'react-router-dom';
class Landingpage extends React.Component{
        state={
            navlinks:[
                {
                    text:'Home',
                    to:'/'
                },
                {
                    text:'About',
                    to:'/about'
                },
                {
                    text:'Testimony',
                    to:'/testimony'
                },
                {
                    text:'Blog',
                    to:'/blog'
                },
                {
                    text:'Gallery',
                    to:'/gallery'
                },
                {
                    text:'Contact',
                    to:'/contact'  
                }
            ]
        }

        // buildLink =(link) => {
        //     return (
        //         <Link to = {link.to } key={ link.to } >
        //             <li>    
        //                 { link.text }
        //             </li>
        //       </Link>
        //     )
        // }
    
    render(){
        return(
            <div className="landingpage-wrapper">
                 <div className="landingpage-container">
                    <div className="landingpage-filter"></div>
                        <header className="nav-text-container">
                            <div className="nav-text">
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Testimony</li>
                                <li>Blog</li>
                                <li>Gallery</li>
                                <li>Contact</li>
                            </ul>
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
        </div>
          )
       }   
    }


export default Landingpage;