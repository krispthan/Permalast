import React from 'react';
import warranty from '../../assets/images/warranty-icon.png';
import recycle from '../../assets/images/Recycly-icon.png';
import piggybank from '../../assets/images/piggy-bank-icon.png';
import checkmark from '../../assets/images/guarantee-check-mark-icon.png';

class LandingpageFooter extends React.Component {
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
        if(window.pageYOffset >= elementTopValue + 500){
                    this.setState(()=>({
                       activeClass: true
                    }));
                 console.log(elementTopValue);   
              }
    }
    render(){
        const landingpageFooterWrapper = "landingpage-footer-wrapper";
        const activeStatus = " inactive";
        return(
            <div className={this.state.activeClass ? landingpageFooterWrapper : ( `${activeStatus}  ${landingpageFooterWrapper}`)}>
                <div className="protect-header">
                    <h3>Protect your roof. Protect your property. Protect your budget</h3>
                </div>
                <div className="progress-bar-savings">
                    <div className="savings-container">
                    <div className="row">
                        <div className="col-lg-3 progress-save-container">
                        <figure className="progress-bar-img-container">
                          <div className="progress-bar"></div>
                          <div className="progress-bar"></div>
                          <div className="progress-bar"></div>
                          <div className="progress-bar"></div>
                          <div className="progress-bar"></div> 
                        </figure>
                            <div className="row flex-row justify-content-space-between">
                            <div className="col-sm-6 col-md-6 savings-info-container">
                                <div className="img-border">
                                  <img id="first-img-icon"className="savings-img" src={ warranty } alt=""/>
                                </div>
                            </div>
                                <div className="col-sm-6 col-md-6 savings-info-container">
                                     <div className="savings-subheader">
                                        <h3>0%</h3>
                                        <h3> Warranty </h3>
                                        <h3>Claims Made</h3>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div className="col-lg-3 progress-save-container">
                      <figure className="progress-bar-img-container">
                          <div className="progress-bar dark-progress"></div>
                          <div className="progress-bar dark-progress"></div>
                          <div className="progress-bar"></div>
                          <div className="progress-bar"></div>
                          <div className="progress-bar"></div> 
                        </figure>
                            <div className="row flex-row justify-content-space-between">
                            <div className="col-sm-6 savings-info-container">
                                <div className="img-border">
                                  <img className="savings-img" src={ recycle } alt=""/>
                                </div>
                            </div>
                                <div className="col-sm-6 savings-info-container">
                                     <div className="savings-subheader">
                                        <h3>35%</h3>
                                        <h3> Potential </h3>
                                        <h3>Energy Savings</h3>
                                </div>
                            </div>
                         </div>
                      </div>
                      <div className="col-lg-3 progress-save-container">
                      <figure className="progress-bar-img-container">
                          <div className="progress-bar dark-progress dark-progress"></div>
                          <div className="progress-bar dark-progress dark-progress"></div>
                          <div className="progress-bar dark-progress dark-progress"></div>
                          <div className="progress-bar dark-progress dark-progress"></div>
                          <div className="progress-bar dark-progress dark-progress"></div> 
                        </figure>
                            <div className="row flex-row justify-content-space-between">
                            <div className="col-sm-6 savings-info-container">
                                <div className="img-border">
                                  <img className="savings-img" src={ piggybank } alt=""/>
                                </div>
                            </div>
                                <div className="col-sm-6 savings-info-container">
                                     <div className="savings-subheader">
                                        <h3>100%</h3>
                                        <h3> Tax</h3>
                                        <h3>Deductable</h3>
                                </div>
                            </div>
                         </div>
                      </div>
                      <div className="col-lg-3  progress-save-container">
                      <figure className="progress-bar-img-container">
                          <div className="progress-bar dark-progress"></div>
                          <div className="progress-bar dark-progress"></div>
                          <div className="progress-bar dark-progress"></div>
                          <div className="progress-bar dark-progress"></div>
                          <div className="progress-bar dark-progress"></div> 
                        </figure>
                            <div className="row flex-row justify-content-space-between">
                            <div className="col-sm-6 savings-info-container">
                                <div className="img-border">
                                  <img className="savings-img" src={ checkmark} alt=""/>
                                </div>
                            </div>
                                <div className="col-sm-6 savings-info-container">
                                     <div className="savings-subheader">
                                        <h3>100%</h3>
                                        <h3> Guarantee </h3>
                                        <h3>For Life</h3>
                                </div>
                            </div>
                         </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default LandingpageFooter;