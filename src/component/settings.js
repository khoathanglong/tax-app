import React, {Component} from 'react';
import {Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import style from '../style/settings.js';
import '../style/settings.css';
import {Link} from 'react-router-dom'

export default class Settings extends Component {
  constructor() {
    super()
    this.state = {notifications: 'off'};
    this.toggleNotification = this.toggleNotification.bind(this)
  }

  toggleNotification() {
    if (this.state.notifications === 'off') {
      this.setState({notifications: 'on'})
      document.getElementById('switch').style.backgroundColor = '#4e0250'
    } else {
      this.setState({notifications: 'off'})
      document.getElementById('switch').style.backgroundColor = '#ccc'

    }
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  render() {
    return(
      <Grid fluid>
         <Row>
          <Col xs={4} style={style.h4ColInactive}>
            <Link to='/profile' style={{color:'inherit'}}>
              <h4>My Profile</h4>
            </Link>
          </Col>
          <Col xs={4} style={style.h4ColInactive}>
            <Link to='/editprofile' style={{color:'inherit'}}>
              <h4>Edit Profile</h4>
            </Link>
          </Col>
          <Col xs={4} style={style.h4ColActive}>
            <Link to='/settings' style={{color:'inherit'}}>
              <h4>Settings</h4>
            </Link>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={1} />
          <Col xs={10}>
            <Form horizontal >
              <FormGroup controlId="formInlineEmail" bsStyle="lg">
                <Col sm={2} componentClass={ControlLabel}>
                  Email
                </Col>
                <Col sm={8}>
                  <FormControl type="email" defaultValue="user@gmail.com" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formInlineEmail" bsStyle="lg">
                <Col sm={2} componentClass={ControlLabel}>
                  Mobile
                </Col>
                <Col sm={8}>
                  <FormControl type="phone" defaultValue="04567892" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formInlineEmail" bsStyle="lg">
                <Col sm={2} componentClass={ControlLabel}>
                  Address
                </Col>
                <Col sm={8}>
                  <FormControl type="text" defaultValue="Tooloo" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formInlineEmail" bsStyle="lg">
                <Col sm={2} componentClass={ControlLabel}>
                  Postal Code
                </Col>
                <Col sm={8}>
                  <FormControl type="number" defaultValue="01525" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formInlineEmail" bsStyle="lg">
                <Col sm={2} componentClass={ControlLabel}>
                  Current PassWord
                </Col>
                <Col sm={8}>
                  <FormControl type="password" defaultValue="01sasd525" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formInlineEmail" bsStyle="lg">
                <Col sm={2} componentClass={ControlLabel}>
                  New PassWord
                </Col>
                <Col sm={8}>
                  <FormControl type="password" placeholder="enter new password" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formInlineEmail" bsStyle="lg">
                <Col sm={2} componentClass={ControlLabel}>
                  Re-Enter PassWord
                </Col>
                <Col sm={8}>
                  <FormControl type="password" placeholder="re-enter new password" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formInlineEmail" bsStyle="lg">
                <Col sm={2} componentClass={ControlLabel} style={{paddingTop:'5px',verticalAlign:'middle'}}>
                  Notifications
                </Col>
                <Col sm={8} id='toggleSwitch'>
                  <span id='switch' onClick={this.toggleNotification}>
                    <span id='slider' className={this.state.notifications}></span>
                  </span>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={8} smOffset={2}>
                  <Button bsStyle="success" bsSize="lg">Save</Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <br/>
      </Grid>
    );
  }
}
