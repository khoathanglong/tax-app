import React, {Component} from 'react';
import '../style/contact.css';

export default class Contact extends Component {

  render() {
    return(
      <div>
      <h2>Contact Us</h2>
      <h4>Feel free to drop us a line or two if you have further questions about our app or need some tax advice.</h4>
      <form class="form-contact-style">
        <ul>
          <li>
            <input type="text" name="name" class="field-style field-split align-left" placeholder="Name" required/>
            <input type="text" name="phone" class="field-style field-split align-left" placeholder="Phone" />
          </li>
          <li>
            <input type="email" name="email" class="field-style field-full" placeholder="Email" required/>
          </li>
          <li>
            <input type="text" name="subject" class="field-style field-full" placeholder="Subject" required />
          </li>
          <li>
            <textarea name="message" class="field-style" placeholder="Message" required></textarea>
          </li>
          <li>
            <input type="submit" value="Send Message" />
          </li>
        </ul>
      </form>
      </div>
    );
  }
}
