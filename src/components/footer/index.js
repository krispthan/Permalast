import React from 'react';

class Footer extends React.Component {
  constructor(props){
    super(props)
    this.state= {
        messageSent: false,
        activeClass : false
    }
}
componentDidMount = () => {
  window.addEventListener("scroll", this.animateScroll);
    
}
animateScroll = (e) => {

  let elementTopValue = document.getElementById("contacts-animate-wrapper").offsetTop;
  if(window.pageYOffset >= elementTopValue -500 ){
              this.setState(()=>({
                 activeClass: true
              }));
           console.log(elementTopValue);   
        }
}
  render(){
    const contactIconWrapper = "contact-icon-wrapper";
    const activeStatus = "inactive";
    return (
      <div>
          <div className={this.state.activeClass ? contactIconWrapper : (`${activeStatus} ${contactIconWrapper}`)}>
            <div className= "contact-icon-container">
              <a href="#"><i class="fas fa-envelope-square"></i>Info@permalast.com</a>
              <a href="#"><i class="fas fa-phone"></i>223-332-2232</a>
              <a href="#"><i class="fas fa-fax"></i>234-321-3211</a>
            </div>  
          </div>
      </div>
   )
  } 
}

export default Footer;