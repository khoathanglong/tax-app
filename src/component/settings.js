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
            <Form inline >
              <FormGroup controlId="formInlineEmail" >
                <ControlLabel style={{paddingRight:'40px'}}>E-mail</ControlLabel>{' '}
                <FormControl type="email" defaultValue="user@gmail.com" />
              </FormGroup>{' '}
              <Button>Update</Button>
            </Form>
            <br/>
            <Form inline>
              <FormGroup controlId="formInlineEmail">
                <ControlLabel style={{paddingRight:'40px'}}>Mobile</ControlLabel>{' '}
                <FormControl type="phone" defaultValue="04567892" />
              </FormGroup>{' '}
              <Button>Update</Button>
            </Form>
            <br/>
            <div id='toggleSwitch'>
              <span style={{height: '34px', verticalAlign: 'middle',paddingRight:"5px",fontWeight:'bold'}}>
                Notifications
              </span>
              <span id='switch' onClick={this.toggleNotification}>
                <span id='slider' className={this.state.notifications}></span>
              </span>
            </div>
          </Col>
        </Row>
        <br/>
      </Grid>
    );
  }
}
