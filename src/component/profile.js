import React, {Component} from 'react';
import {Col, Row, Grid, FormGroup, ControlLabel, FormControl, Form, Button} from 'react-bootstrap';
import { Chart } from 'react-google-charts';
import style from '../style/profile.js';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router-dom'
import '../style/settings.css';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {timeVal: "yearly", chartData: "both"};
    this.changeTime = this.changeTime.bind(this);
    this.drawChart = this.drawChart.bind(this);
  }

  disableDates(date) {
    return date.getDate() > 1;
  }

  formatDate(date) {
    return date.getMonth()+1 + "/" + date.getFullYear();
  }

  changeTime() {
    this.setState({timeVal: document.getElementById("time").value});
  }

  drawChart() {
    this.setState({chartData: document.getElementById("data-type").value});
  }


  render() {
    return(
      <Grid fluid>
        <Row>
          <Col xs={4} style={style.h4ColActive}>
            <Link to='/profile' style={{color:'inherit'}}>
              <h4>My Profile</h4>
            </Link>
          </Col>
          <Col xs={4} style={style.h4ColInactive}>
            <Link to='/editprofile' style={{color:'inherit'}}>
              <h4>Edit Profile</h4>
            </Link>
          </Col>
          <Col xs={4} style={style.h4ColInactive}>
            <Link to='/settings' style={{color:'inherit'}}>
              <h4>Settings</h4>
            </Link>
          </Col>
        </Row>
        <h3 style={{textAlign: "center", margin: "40px"}}>Hello, User!</h3>
        <Row>
          <Col md={6}>
            <p style={{textAlign: "center", fontWeight: "bold"}}>Your accumulated income compared to your income limit is now...</p>

            <Chart
              chartType="PieChart"
              data={[['Accumulated Income', 'The rest of income'], ['Remainder of income limit', 7000], ['Accumulated Income', 5000]]}
              options={style.donutChart}
              graph_id="DonutChart"
              width="100%"
              height="500px"
            />

          </Col>

          <Col md={6}>
            <p style={{textAlign: "center", fontWeight: "bold"}}>Adjust the options below to see your income and tax summary:</p>

            {(this.state.chartData === "both") &&
              <Chart
                chartType="ColumnChart"
                data={[["Year", "Job 1's income", "Job 1's tax", "Job 2's income", "Job 2's tax"], ['2015', 15000, -1000, 5000, -800], ['2016', 20000, -2500, 10000, -1500], ['2017', 30000, -5000, 12000, -1500]]}
                options={style.columnChart}
                graph_id="ColumnChart"
                width="100%"
                height="500px"
              />
            }

            {(this.state.chartData === "incomes") &&
              <Chart
                chartType="LineChart"
                data={[["Year", "Job 1's income", "Job 2's income"], ['2015', 15000, 5000], ['2016', 20000, 10000], ['2017', 30000, 12000]]}
                options={style.lineChart}
                graph_id="LineChart"
                width="100%"
                height="500px"
              />
            }

            {(this.state.chartData === "taxes") &&
              <Chart
                chartType="BarChart"
                data={[["Year", "Job 1's tax", "Job 2's tax"], ['2015', 1000, 800], ['2016', 2500, 1500], ['2017', 5000, 1500]]}
                options={style.barChart}
                graph_id="BarChart"
                width="100%"
                height="500px"
              />
            }

            <Form inline>
              <FormGroup controlId="formControlsSelect" style={{margin: "10px 0"}}>
                <ControlLabel style={{margin: "0 5px 0 20px"}}>Data types:</ControlLabel>
                <FormControl componentClass="select" id="data-type">
                  <option value="both" selected="selected">Incomes and Taxes</option>
                  <option value="incomes">Incomes</option>
                  <option value="taxes">Taxes</option>
                </FormControl>
              </FormGroup>

              <FormGroup controlId="formControlsSelect" style={{margin: "10px 0"}}>
                <ControlLabel style={{margin: "0 5px 0 20px"}}>Time range:</ControlLabel>
                <FormControl componentClass="select" onChange={this.changeTime} id="time">
                  <option value="yearly" selected="selected">Yearly</option>
                  <option value="monthly">Monthly</option>
                </FormControl>
              </FormGroup>
            </Form>

            {(this.state.timeVal === "yearly") &&
              <Form inline>
                <FormGroup controlId="formControlsSelect" style={{margin: "10px 0"}}>
                  <ControlLabel style={{margin: "0 5px 0 20px"}}>From:</ControlLabel>
                  <FormControl componentClass="select" id="from-year">
                    <option value="2015" selected="selected">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                  </FormControl>
                </FormGroup>

                <FormGroup controlId="formControlsSelect" style={{margin: "10px 0"}}>
                  <ControlLabel style={{margin: "0 5px 0 20px"}}>To:</ControlLabel>
                  <FormControl componentClass="select" id="to-year">
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017" selected="selected">2017</option>
                    <option value="2018">2018</option>
                  </FormControl>
                </FormGroup>
              </Form>
            }

            {(this.state.timeVal === "monthly") &&
              <div style={{marginLeft: "20px"}}>
                <span style={{fontWeight: "bold"}}>From:</span>
                <MuiThemeProvider>
                  <DatePicker hintText="Pick month & year" shouldDisableDate={this.disableDates} formatDate={this.formatDate} openToYearSelection={true} />
                </MuiThemeProvider>
                <span style={{fontWeight: "bold"}}>To:</span>
                <MuiThemeProvider>
                  <DatePicker hintText="Pick month & year" shouldDisableDate={this.disableDates} formatDate={this.formatDate} openToYearSelection={true} />
                </MuiThemeProvider>
              </div>
            }

            <Button bsStyle="" style={style.buttonStyle} onClick={this.drawChart}>Generate</Button>

          </Col>
        </Row>
      </Grid>
    );
  }
}
