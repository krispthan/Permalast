import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input  from '../helpers/input';
import { sendContactForm } from '../actions/index';
import { connect } from 'react-redux';
import youtube from '../../assets/images/youtube.png';
import facebook from '../../assets/images/facebook.png';
import map from '../../assets/images/map.png';
import contactbkg from '../../assets/images/contact_bkg.png'


const required = value => value ? undefined : 'Field is Required';

class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            messageSent :  false
        }
    }
    submitHandler = (values) => {
        this.props.sendContactForm(values).then(() => this.setState(() => ({
            messageSent: true
          })));
        return values;
      }
    render(){
        const { handleSubmit, pristine, reset, submitting } = this.props
        return(
            <div className="contacts-wrapper">
                <div className="left-right-col-container">
                <div className="row">
                    <div className="col-lg-6 contact-us-left-container">
                    <div className="contact-us-left-filter"></div>
                    <div className="contact-info-wrapper">
                            <div className="row">
                                <div className="contact-icon-container d-flex justify-container-space-around">
                                    <div className="col-lg-4   contact-img-icon-container">
                                        <img src={ facebook } alt=""/> 
                                    </div>
                                    <div className="col-lg-4 contact-img-icon-container">
                                        <img src={ youtube } alt=""/>
                                    </div>
                                    <div className="col-lg-4  contact-img-icon-container">
                                    <img src={ youtube } alt=""/>
                                    </div>
                                </div>
                            </div>
                        <hr/>
                        <div className="row">
                            <div className="contact-us-display">
                                <h3>Contact Us</h3>
                            </div>  
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="contact-us-details">
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas labore, numquam exercitationem ipsam laudantium impedit excepturi, cum voluptatem est quos laborum sit deserunt nihil dolore error inventore? Voluptas adipisci illum tenetur praesentium laborum hic reiciendis nesciunt natus ratione, unde facilis aspernatur magnam itaque velit dolore repellat incidunt suscipit vitae sequi mollitia magni aliquid voluptatem id similique? Accusamus saepe eaque possimus quos beatae dicta ad autem facere molestiae sed, sunt atque tempore modi, doloribus vel iusto. Ea et sapiente illum accusantium qui sunt! Repellendus deleniti quaerat tempora natus fugit? Commodi mollitia a minus repellendus soluta! Voluptatem praesentium ipsam cum tenetur. Aperiam.</p>
                            </div>  
                         </div>
                    </div>
                </div>
                    <div className="col-lg-6 contact-us-right-container">
                        <div className="subheader-container">
                            <h3>Help us Help you</h3>
                        </div>
                        <form  id="contact-form" onSubmit={handleSubmit}>
                            <div class="field-input-container">
                                <Field
                                    name="firstName"
                                    component="input"
                                    type="text"
                                    placeholder="First Name"
                                    validate={ required }
                                    component={ Input }/>
                                </div>
                                <div class="field-input-container">
                                <Field
                                    name="lastName"
                                    component="input"
                                    type="text"
                                    placeholder="Last Name"
                                    validate={ required }
                                    component={ Input }/>
                                </div>
                            <div class="field-input-container">
                                <Field
                                    name="email"
                                    component="input"
                                    type="email"
                                    placeholder="Email"
                                    validate={ required }
                                    component={ Input }/>
                                </div>
                            <div class="field-input-container">
                                <Field
                                    name="company"
                                    component="input"
                                    type="company"
                                    placeholder="Company"
                                    component={ Input }/>
                                </div>
                            <div class="field-input-container">
                                    <Field name="notes"
                                    placeholder="Comments" 
                                    component="textarea"/>
                                </div> 
                             <div>
                                 <div className="form-buttons">
                                    <button type="submit" disabled={pristine || submitting}> Submit </button>   
                                    <button type="button" disabled={pristine || submitting} onClick={reset}> Clear Values </button>
                                </div>
                             </div>
                        </form>
                     </div>
                </div>
            </div>
                        <div className="row">
                            <div className="contact-map-container p-4 d-flex">
                                <div className="contact-map-filter"></div>
                                <div className="contact-map-info-wrapper d-flex justify-content-center flex-direction- my-5">
                                <div className="contact-address-container">
                                    <h4>4201 Northridge rd. Austin, TX, 78728</h4>
                                </div>
                                <div className="contact-display-container">
                                   <h2>keeping Texas Wild</h2>
                                </div>
                                <hr/>
                            </div>
                        </div>
                </div>
        </div>
        )
    }
}



Contact = reduxForm({
    form: 'contact_form',
  })(Contact) ;

const mapStateToProps = state => {
  return {
    contact_form: state.form
  }
}
export default connect(mapStateToProps, { sendContactForm })(Contact); 