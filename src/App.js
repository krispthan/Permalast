import React, { Component } from 'react';

// import './App.css';
import './styles/styles.scss';
import Navbar from './components/nav/index';
// import Landingpage from './components/landingpage/index';
import LandingpageFooter from './components/landingpage_footer/index';
// import Contact from './components/contacts/index';
// import Footer from './components/footer/index';
import Preloader from './components/preloader/index';
class App extends Component {
  componentDidMount(){
    setTimeout(()=> {
      let preloader = document.querySelector('.spinner-container');
      preloader.className = 'spinner-container spinner-disappear';
    }, 1000)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Preloader/>
        <Navbar/>
        <LandingpageFooter/>
        {/* <Landingpage/> */}
        </header>
        {/* <Contact/> */}
        {/* <Footer/>  */}
      </div>
    );
  }
}

export default App;
