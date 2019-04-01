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