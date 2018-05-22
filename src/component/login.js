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
                <input type="text" name="firstname" class="field-style field-split align-left" placeholder="First Name" required/>
                <input type="text" name="lastname" class="field-style field-split align-left" placeholder="Last Name" required/>
              </li>
              <li>
                <input type="text" name="username" class="field-style field-split align-left" placeholder="Username" required/>
                <input type="email" name="email" class="field-style field-split align-none" placeholder="Email" required/>
                <input type="password" name="password" class="field-style field-split align-left" placeholder="Password" required/>
                <input type="password" name="confirm" class="field-style field-split align-left" placeholder="Confirm Password" required/>
              </li>
              <li>
                <Link to="profile">
                  <input type="submit" value="Sign Up" />                
                </Link>
              </li>
            </ul>
          </form>

            </Col>
            <Col md={6} mdPull={6}>
            <form class="form-style align-left">
              <h2>Already a User</h2>
              <ul>
                <li>
                  <input type="text" name="username" class="field-style field-full" placeholder="Username" required/>
                  <input type="password" name="password" class="field-style field-full" placeholder="Password" required/>
                </li>
                <li>
                  <Link to='/profile'> {/*this Link is temporary, will be removed after integrating backend sigup*/}
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
