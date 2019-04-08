import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input  from '../helpers/input';
import { connect } from 'react-redux';
import { sendContactForm } from '../actions/index';


const required = value => value ? undefined : 'Field is Required';

class NewsLetterContact extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            messageSent :  false,
            showModal: false
        }
    }
    submitHandler = (values) => {
        this.props.sendContactForm(values).then(() => this.setState(() => ({
            messageSent: true
          })));
        return values;
      }
      displayModal = () => {
        this.setState({showModal: true});
      }
      hideModal = () => {
          this.setState({showModal: false});
      }
    render(){
        const { handleSubmit, pristine, reset, submitting } = this.props;
        const modalContent = "modal-content";
        const activeStatus = "inactive"
      
        return(
            <div>
             <div className={this.state.showModal ? modalContent :(`${modalContent} ${activeStatus}`)}>
                <div className="modal-header">
                <button onClick={this.hideModal} type="button" class="close" data-dismiss="modal">&times;</button>
                    <div className="modal-header-title">
                        <h2>PermaLast Newsletter</h2>
                    </div>
                    <div className="modal-header-subtitle">
                        <h3>Get Updates and Information directly from us</h3>
                    </div>
                    <div className="newsletter-info">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias nobis harum natus dignissimos vitae quibusdam quod inventore quas consequatur officia error quidem veniam ullam fugiat minima in vero nam perferendis magnam, voluptatum cumque soluta expedita repudiandae. Facere totam, corporis perferendis illum laboriosam eius beatae quidem, cumque, expedita optio soluta iure.</p>
                    </div>
                </div>
                <div class="modal-body">
                <form  id="newsletter-contact-form" onSubmit={handleSubmit}>
                            <div className="newsletter-field-input-container">
                                <Field
                                    name="firstName"
                                    component="input"
                                    type="text"
                                    placeholder="Full Name"
                                    validate={ required }
                                    component={ Input }/>
                                </div>
                                <div className="newsletter-field-input-container">
                                <Field
                                    name="email"
                                    component="input"
                                    type="email"
                                    placeholder="Email"
                                    validate={ required }
                                    component={ Input }/>
                                </div>
                            <div className="newsletter-field-input-container">
                                <Field
                                    name="phone"
                                    component="input"
                                    type="phone"
                                    placeholder="Phone"
                                    validate={ required }
                                    component={ Input }/>
                                </div>
                            <div className="newsletter-field-input-container">
                                    <Field name="notes"
                                    placeholder="Comments" 
                                    component="textarea"/>
                                </div> 
                             <div>
                                 <div className="newsletter-form-buttons">
                                    <button type="submit" disabled={pristine || submitting}> Submit </button>   
                                </div>
                             </div>
                        </form>
                </div> 
            </div> 
         </div>
        )
    }
}

NewsLetterContact = reduxForm({
    form: 'newsletter_contact_form',
  })(NewsLetterContact) ;

const mapStateToProps = state => {
  return {
    newsletter_contact_form: state.form
  }
}
export default connect(mapStateToProps, { sendContactForm })(NewsLetterContact); 