import React from 'react';
import logo from '../../assets/images/permalast.png'
class Preloader extends React.Component {
    state = {
        active: false,
        isLoading: false,
        activeClass: false,
        currentPreloaderState: "preloader-wrapper preloader-default intro-state",
        introState: ""
    }
    componentDidMount = () => {
        setTimeout(()=>{
            this.setState({currentPreloaderState: this.state.currentPreloaderState.replace("intro-state", "")});
            setTimeout(()=>{
                this.setState({currentPreloaderState: this.state.currentPreloaderState.replace("preloader-default", "")});
                setTimeout(() =>{
                    this.setState({currentPreloaderState: this.state.currentPreloaderState + " outro-state"});
                }, 1300)
            },900)
        },500)
          
    }

    render(){
        const preloaderWrapper ="preloader-wrapper preloader-default intro-state";
        const activeStatus ="inactive";
      
        return(
            <div className={this.state.currentPreloaderState}  >
                <div className="preloader-container">
                 <div className="preloader-content-container">
                <hr/>
                  <div className="preloader-title">
                      <h1 id="perma">Perma<span className="last">[</span>last<span className="last">]</span></h1>
                  </div>
                 <hr/>
                    <div className="loading-text">
                        <h6>Loading...</h6>
                    </div>
                </div>
              </div>
            </div>
        )
    }
}

export default Preloader;