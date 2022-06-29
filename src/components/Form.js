import React from 'react'
import './FormStyles.css'
const Form = () => {
  return (
		<div className="form">
			<form>
				<label> Your name</label>
				<input type="text" />
				<label> Email</label>
				<input type="email" />
				<label> Subject</label>
              <input type="text" />
              <label>Message</label>
              <textarea rows="6" placeholder='Type your message here!' />
              <button className='btn'>submit</button>
			</form>
		</div>
	);
}
export default Form;
