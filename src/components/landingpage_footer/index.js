import React from 'react';


class LandingpageFooter extends React.Component {
    render(){
        return(
            <div className="footer-wrapper">
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
                                  <img className="savings-img" src="../../assets/images/warranty-icon.png" alt=""/>
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
                                  <img className="savings-img" src="../../assets/images/guarantee-check-mark-icon.png" alt=""/>
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
                                  <img className="savings-img" src="../../assets/images/guarantee-check-mark-icon.png" alt=""/>
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
                                  <img className="savings-img" src="../../assets/images/guarantee-check-mark-icon.png" alt=""/>
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