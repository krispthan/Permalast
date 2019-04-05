import React, { Component } from "react";
import "./styles/styles.scss";
import HamburgerMenu from "./components/nav/index";
import Landingpage from "./components/landingpage/index";
import Contact from "./components/contacts/index";
import Preloader from "./components/preloader/index";
import Aboutus from "./components/aboutus/index";
import Gallery from "./components/gallery/index";
// import LandingpageFooter from './components/landingpage_footer/index';
// import NavMenu from "./components/nav/main";

// import {BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  componentDidMount(){
    setTimeout(()=> {
      let preloader = document.querySelector(".spinner-container");
      preloader.className = "spinner-container spinner-disappear";
    }, 1000)
  }
  render() {
    return (
      <div>
        <Preloader/>
        <HamburgerMenu/>
        <Landingpage/>
        <Aboutus/>
        <Gallery/>
        <Contact/>
        {/* <NavMenu/> */}
{/*          
         <BrowserRouter>
          <Switch>
            <Route exact path="/" component = { Landingpage }/>
            <Route path="/" component = {LandingpageFooter}/>
            <Route path="/" component = { Aboutus }/>
            <Route path="/" component = { Contact}/>
          </Switch>
        </BrowserRouter> */}

          
      </div>
    );
  }
}

export default App;
