import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../style/login.css';
import {Link} from 'react-router-dom'
export default class Login extends Component {

  render() {
    return(
        <Grid>
          <Row className="show-grid">
            <Col md={6} mdPush={6}>
            <form class="form-style align-right">
              <h2>Wanna be a User</h2>
              <ul>
              <li>
                <input type="text" name="firstname" class="field-style field-split align-left" placeholder="First Name" />
                <input type="text" name="lastname" class="field-style field-split align-left" placeholder="Last Name" />
              </li>
              <li>
                <input type="text" name="username" class="field-style field-split align-left" placeholder="Username" />
                <input type="email" name="email" class="field-style field-split align-none" placeholder="Email" />
                <input type="password" name="password" class="field-style field-split align-left" placeholder="Password" />
                <input type="password" name="confirm" class="field-style field-split align-left" placeholder="Confirm Password" />
              </li>
              <li>
                <input type="submit" value="Sign Up" />
              </li>
            </ul>
          </form>

            </Col>
            <Col md={6} mdPull={6}>
            <form class="form-style align-left">
              <h2>Already a User</h2>
              <ul>
                <li>
                  <input type="text" name="username" class="field-style field-full" placeholder="Username" />
                  <input type="password" name="password" class="field-style field-full" placeholder="Password" />
                </li>
                <li>
                  <Link to='/profile'>
                    <input type="submit" value="Log in" />
                  </Link>
                </li>
                </ul>
              </form>  
          </Col>
          </Row>
      </Grid>
  );
}
}
