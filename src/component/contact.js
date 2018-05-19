import React, {Component} from 'react';
import '../style/contact.css';

export default class Contact extends Component {

  render() {
    return(
      <div>
      <h2>Contact Us</h2>
      <h4>Feel free to drop us a line or two if you have further questions about our app or need some tax advice.</h4>
      <form class="form-style">
        <ul>
          <li>
            <input type="text" name="name" class="field-style field-split align-left" placeholder="Name" />
            <input type="text" name="phone" class="field-style field-split align-left" placeholder="Phone" />

          </li>
          <li>
            <input type="email" name="email" class="field-style field-full align-none" placeholder="Email" />

          </li>
          <li>
            <input type="text" name="subject" class="field-style field-full align-none" placeholder="Subject" />
          </li>
          <li>
            <textarea name="message" class="field-style" placeholder="Message"></textarea>
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
