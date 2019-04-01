import React, { Component } from 'react';

// import './App.css';
import './styles/styles.scss';
import Navbar from './components/nav/index';
// import Landingpage from './components/landingpage/index';
// import LandingpageFooter from './components/landingpage_footer/index';
import Contact from './components/contacts/index';
import Footer from './components/footer/index';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Navbar/>
        {/* <LandingpageFooter/> */}
        {/* <Landingpage/> */}
        </header>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
