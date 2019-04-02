import axios from 'axios';

export const sendContactForm = values => {
  const { firstName, lastName, phoneNumber, email, message } = values;

  return async dispatch => {
    const response = await axios.post('/api/contactform.php', {
        firstName, lastName, phoneNumber, email, message
    })

  dispatch({
    type: 'SEND_CONTACT_FORM',
    payload: response
   })
  }
}



export const sendSignupForm = values => {
  const { firstName, lastName, email } = values;

  return async dispatch => {
    const response = await axios.post('/api/signupform.php',{
      firstName, lastName, email
    })
    
    dispatch({
      type: 'SEND_SIGNUP_FORM',
      payload:response
    })
  }
}