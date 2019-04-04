import React, { Component } from "react";
import "./styles/styles.scss";
import Navbar from "./components/nav/index";
import Landingpage from "./components/landingpage/index";
import Contact from "./components/contacts/index";
import Preloader from "./components/preloader/index";
import Aboutus from "./components/aboutus/index";
import LandingpageFooter from './components/landingpage_footer/index';
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
        <Navbar/>
        <Landingpage/>
        <LandingpageFooter/>
        <Aboutus/>
        <Contact/>
        {/* <BrowserRouter>
          <Switch>
            <Route exact path="/" component = { Landingpage }/>
            <Route path="aboutus" component = { Aboutus }/>
            <Route path="contacts" component = { Contact}/>
          </Switch>
        </BrowserRouter>
     */}
          
      </div>
    );
  }
}

export default App;
