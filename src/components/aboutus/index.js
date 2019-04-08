import React from 'react';
import Input from '../helpers/input';
import { Field, reduxForm } from 'redux-form';
import { sendSignupForm } from '../actions/index';
import { connect } from 'react-redux';





// window.addEventListener('scroll', function(e) {
// let elementsEffect = document.getElementsByClassName("");

// if(window.pageYOffset >= element.offsetTop + 500){
//     elementsEffect.classList.add("active");
//     console.log(window.pageYOffset, element.offsetTop);
// }
// });


const required = value => value ? undefined : 'Field is Required';
class Signup extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            messageSent: false,
            activeClass : false
        }
    }

    submitButton = (values) => {
        this.props.sendSignupForm(values).then(()=> this.setState(()=>({
            messageSent:true
        })));
        return values;
    }
    componentDidMount = () => {
        window.addEventListener("scroll", this.animateScroll);
          
    }
    animateScroll = (e) => {
        let elementTopValue = document.getElementById("about-us-message-container").offsetTop;
        if(window.pageYOffset >= elementTopValue -500){
                    this.setState(()=>({
                       activeClass: true
                    }));
                 console.log(elementTopValue);   
              }
    }

    render(){
        const{ handleSubmit, submitting } = this.props;
        const aboutUsWrapper = "aboutus-wrapper";
        const aboutUsMessageActive =" inactive"
    return (
        <div className={ this.state.activeClass ? aboutUsWrapper: ( aboutUsWrapper + aboutUsMessageActive)}  id="about-us-message-container">
            <div className="aboutus-filter"></div>
            <div className="aboutus-container">
            <div className="aboutus-info-wrapper">
                <div className="aboutus-header">
                    <h2>All about Quality</h2>
                </div>
                <blockquote  className="aboutus-info-container">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate praesentium vitae sapiente qui fuga eos corporis minima, quam recusandae hic officia porro culpa. Voluptatum corporis officia autem quam animi tenetur deserunt odio possimus assumenda! Dolores modi voluptate vero ea ipsum iure suscipit dolor, voluptatum, nam aspernatur earum esse magnam ipsa natus? Architecto obcaecati ratione corrupti, saepe ab hic eos adipisci ea consequuntur, rerum molestiae libero praesentium voluptatem maiores accusantium illo porro pariatur? Ea quod porro sequi ratione enim, dolorum pariatur mollitia! Voluptatem nam rem omnis soluta a repellendus, deleniti facere harum. Impedit consectetur quos est ex, quas sapiente quod.</p>
                    <div className="author-cite">
                         <cite>-David Johnson, CEO</cite>
                    </div>      
                </blockquote>
            </div>
            <footer>
                <div className="aboutus-wrapper" id="footer-container">
                         <div className="signup-container">
                    <div className="signup-text">
                        <h6>Sign up for Free Consultation</h6>
                    </div>
                    <form className="form" id="signup-form" onSubmit={ handleSubmit }>
                    <div className="signup-container">
                        <Field 
                            name="firstName"
                            type="text"
                            placeholder="Full Name"
                            validate={ required }
                            component={ Input }/>
                    </div>
                    <div className="signup-container">
                        <Field
                            name="email"
                            type="email"
                            placeholder="Email"
                            validate={ required }
                            component={ Input }/>
                    </div>
                        <button type="button" disabled= {submitting}>Submit</button>
                    </form>
                </div>
            </div>
         </footer>
        </div>
    </div>
    )
  }
}

Signup = reduxForm({
    form: 'signup_form',
  })(Signup) ;

const mapStateToProps = state => {
  return {
    signup_form: state.form
  }
}
export default connect(mapStateToProps, { sendSignupForm })(Signup);