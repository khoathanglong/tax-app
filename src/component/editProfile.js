import React, {Component} from 'react';
import {Grid, Row, Col, Tabs, Tab, Form, FormGroup, ControlLabel, FormControl, ButtonGroup, Button, Checkbox, Jumbotron, Table, InputGroup} from 'react-bootstrap';
import style from '../style/editProfile.js';
import '../style/editProfile.css';

const cities = ['Akaa', 'Alajärvi', 'Alavieska', 'Alavus', 'Asikkala', 'Askola', 'Aura', 'Brändö', 'Eckerö', 'Enonkoski', 'Enontekiö', 'Espoo', 'Eura', 'Eurajoki', 'Evijärvi', 'Finström', 'Forssa', 'Föglö', 'Geta', 'Haapajärvi', 'Haapavesi', 'Hailuoto', 'Halsua', 'Hamina', 'Hammarland', 'Hankasalmi', 'Hanko', 'Harjavalta', 'Hartola', 'Hattula', 'Hausjärvi', 'Heinola', 'Heinävesi', 'Helsinki', 'Hirvensalmi', 'Hollola', 'Honkajoki', 'Huittinen', 'Humppila', 'Hyrynsalmi', 'Hyvinkää', 'Hämeenkyrö', 'Hämeenlinna', 'Ii', 'Iisalmi', 'Iitti', 'Ikaalinen', 'Ilmajoki', 'Ilomantsi', 'Imatra', 'Inari', 'Ingå', 'Isojoki', 'Isokyrö', 'Jakobstad', 'Janakkala', 'Joensuu', 'Jokioinen', 'Jomala', 'Joroinen', 'Joutsa', 'Juankoski', 'Juuka', 'Juupajoki', 'Juva', 'Jyväskylä', 'Jämijärvi', 'Jämsä', 'Järvenpää', 'Kaarina', 'Kaavi', 'Kajaani', 'Kalajoki', 'Kangasala', 'Kangasniemi', 'Kankaanpää', 'Kannonkoski', 'Kannus', 'Karijoki', 'Karkkila', 'Karstula', 'Karvia', 'Kaskinen', 'Kauhajoki', 'Kauhava', 'Kauniainen', 'Kaustinen', 'Keitele', 'Kemi', 'Kemijärvi', 'Keminmaa', 'Kempele', 'Kerava', 'Keuruu', 'Kihniö', 'Kimitoön', 'Kinnula', 'Kirkkonummi', 'Kitee', 'Kittilä', 'Kiuruvesi', 'Kivijärvi', 'Kokemäki', 'Kokkola', 'Kolari', 'Konnevesi', 'Kontiolahti', 'Korsholm', 'Korsnäs', 'Koski Tl', 'Kotka', 'Kouvola', 'Kristinestad', 'Kronoby', 'Kuhmo', 'Kuhmoinen', 'Kumlinge', 'Kuopio', 'Kuortane', 'Kurikka', 'Kustavi', 'Kuusamo', 'Kyyjärvi', 'Kärkölä', 'Kärsämäki', 'Kökar', 'Lahti', 'Laihia', 'Laitila', 'Lapinjärvi', 'Lapinlahti', 'Lappajärvi', 'Lappeenranta', 'Lapua', 'Larsmo', 'Laukaa', 'Lemi', 'Lemland', 'Lempäälä', 'Leppävirta', 'Lestijärvi', 'Lieksa', 'Lieto', 'Liminka', 'Liperi', 'Lohja', 'Loppi', 'Loviisa', 'Luhanka', 'Lumijoki', 'Lumparland', 'Luumäki', 'Luvia', 'Malax', 'Mariehamn', 'Marttila', 'Masku', 'Merijärvi', 'Merikarvia', 'Miehikkälä', 'Mikkeli', 'Muhos', 'Multia', 'Muonio', 'Muurame', 'Mynämäki', 'Myrskylä', 'Mäntsälä', 'Mänttä-Vilppula', 'Mäntyharju', 'Naantali', 'Nakkila', 'Nivala', 'Nokia', 'Nousiainen', 'Nurmes', 'Nurmijärvi', 'Nykarleby', 'Närpes', 'Orimattila', 'Oripää', 'Orivesi', 'Oulainen', 'Oulu', 'Outokumpu', 'Padasjoki', 'Paimio', 'Paltamo', 'Pargas', 'Parikkala', 'Parkano', 'Pedersöre', 'Pelkosenniemi', 'Pello', 'Perho', 'Pertunmaa', 'Petäjävesi', 'Pieksämäki', 'Pielavesi', 'Pihtipudas', 'Pirkkala', 'Polvijärvi', 'Pomarkku', 'Pori', 'Pornainen', 'Porvoo', 'Posio', 'Pudasjärvi', 'Pukkila', 'Punkalaidun', 'Puolanka', 'Puumala', 'Pyhtää', 'Pyhäjoki', 'Pyhäjärvi', 'Pyhäntä', 'Pyhäranta', 'Pälkäne', 'Pöytyä', 'Raahe', 'Raisio', 'Rantasalmi', 'Ranua', 'Raseborg', 'Rauma', 'Rautalampi', 'Rautavaara', 'Rautjärvi', 'Reisjärvi', 'Riihimäki', 'Ristijärvi', 'Rovaniemi', 'Ruokolahti', 'Ruovesi', 'Rusoko', 'Rääkkylä', 'Saarijärvi', 'Salla', 'Salo', 'Saltvik', 'Sastamala', 'Sauvo', 'Savitaipale', 'Savonlinna', 'Savukoski', 'Seinäjoki', 'Sievi', 'Siikainen', 'Siikajoki', 'Siikalatva', 'Siilinjärvi', 'Simo', 'Sipoo', 'Siuntio', 'Sodankylä', 'Soini', 'Somero', 'Sonkajärvi', 'Sotkamo', 'Sottunga', 'Sulkava', 'Sund', 'Suomussalmi', 'Suonenjoki', 'Sysmä', 'Säkylä', 'Taipalsaari', 'Taivalkoski', 'Taivassalo', 'Tammela', 'Tampere', 'Tervo', 'Tervola', 'Teuva', 'Tohmajärvi', 'Toholampi', 'Toivakka', 'Tornio', 'Turku', 'Tuusniemi', 'Tuusula', 'Tyrnävä', 'Ulvila', 'Urjala', 'Utajärvi', 'Utsjoki', 'Uurainen', 'Uusikaupunki', 'Vaala', 'Vaasa', 'Valkeakoski', 'Valtimo', 'Vantaa', 'Varkaus', 'Vehmaa', 'Vesanto', 'Vesilahti', 'Veteli', 'Vieremä', 'Vihti', 'Viitasaari', 'Vimpeli', 'Virolahti', 'Virrat',  'Vårdö', 'Vörå', 'Ylitornio', 'Ylivieska', 'Ylöjärvi', 'Ypäjä', 'Ähtäri', 'Äänekoski'];

const churchAdherence = ['Evangelica-Lutheran', 'Orthodox', 'German Congregation in Finland', 'not a taxpayer for Church tax', 'Rikssvenska Olaus Petri-församlingen'];

export default class EditProfile extends Component {

  render() {
    return(
      <Grid fluid>
        <Row>
          <Col sm={4} xs={10} xsOffset={1} smOffset={0} style={style.h4ColInactive}>
            <h4>My Profile</h4>
          </Col>
          <Col sm={4} xs={10} xsOffset={1} smOffset={0} style={style.h4ColActive}>
            <h4>Edit Profile</h4>
          </Col>
          <Col sm={4} xs={10} xsOffset={1} smOffset={0} style={style.h4ColInactive}>
            <h4>Notification Settings</h4>
          </Col>
        </Row>

        <Row>
          <Col xs={1} />
          <Col xs={10}>
            <Tabs defaultActiveKey={1} id="edit-profile-tabs" style={style.allTabs}>
              <Tab eventKey={1} title="Basic Info">
                <Button bsStyle='' style={style.saveBtn}>
                  <i class="fas fa-save"></i> Save
                </Button>

                <Form inline style={style.form}>
                  <FormGroup controlId="formInlineName">
                    <ControlLabel>Name</ControlLabel>{' '}
                    <FormControl type="text" defaultValue="User" />
                  </FormGroup>{' '}

                  <FormGroup controlId="formInlineBirthYear">
                    <ControlLabel>Birth Year</ControlLabel>{' '}
                    <FormControl type="number" defaultValue='1985' max='2000'/>
                  </FormGroup>{' '}
                </Form>

                <Form inline style={style.form}>
                  <FormGroup controlId="formInlineMarriage">
                    <ControlLabel>Marital Status</ControlLabel>{' '}
                    <ButtonGroup>
                      <Button><i class="fas fa-user-alt"></i> Single</Button>
                      <Button><i class="fas fa-heart"></i> Married</Button>
                    </ButtonGroup>
                  </FormGroup>{' '}

                  <FormGroup controlId="formInlineMarriageFrom">
                    <ControlLabel>From</ControlLabel>{' '}
                    <FormControl type="date" />
                  </FormGroup>{' '}

                  <FormGroup controlId="formInlineMarriageTo">
                    <ControlLabel>To</ControlLabel>{' '}
                    <FormControl type="date" />
                  </FormGroup>{' '}

                  <Checkbox readOnly>
                    {' '}To present
                  </Checkbox>{' '}

                  <Button><i class="fas fa-plus"></i> Add</Button>
                </Form>

                <Jumbotron>
                  <Table striped bordered condensed hover responsive>
                    <thead>
                      <tr>
                        <th>Marital Status</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Edit/Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Single</td>
                        <td>01/01/1985</td>
                        <td>present</td>
                        <td>
                          <ButtonGroup>
                            <Button bsStyle='info'><i class="fas fa-edit"></i></Button>{' '}
                            <Button bsStyle='danger'><i class="fas fa-trash-alt"></i></Button>
                          </ButtonGroup>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Jumbotron>
              </Tab>

              <Tab eventKey={2} title="City">
                <Button bsStyle='' style={style.saveBtn}>
                  <i class="fas fa-save"></i> Save
                </Button>

                <Form inline style={style.form}>
                  <FormGroup controlId="formInlineCity">
                    <ControlLabel>City:</ControlLabel>{' '}

                    <FormControl componentClass="select" id="city">
                      <option value="none" selected="selected">-- Select City</option>
                      {cities.map((city) =>
                        <option value={city}>{city}</option>
                      )}
                    </FormControl>{' '}

                    <FormGroup controlId="formInlineCityFrom">
                      <ControlLabel>From</ControlLabel>{' '}
                      <FormControl type="date" />
                    </FormGroup>{' '}

                    <FormGroup controlId="formInlineCityTo">
                      <ControlLabel>To</ControlLabel>{' '}
                      <FormControl type="date" />
                    </FormGroup>{' '}

                    <Checkbox readOnly>
                      {' '}To present
                    </Checkbox>{' '}

                    <Button><i class="fas fa-plus"></i> Add</Button>
                  </FormGroup>
                </Form>

                <Jumbotron>
                  <Table striped bordered condensed hover responsive>
                    <thead>
                      <tr>
                        <th>City</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Edit/Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Helsinki</td>
                        <td>01/01/1985</td>
                        <td>present</td>
                        <td>
                          <ButtonGroup>
                            <Button bsStyle='info'><i class="fas fa-edit"></i></Button>{' '}
                            <Button bsStyle='danger'><i class="fas fa-trash-alt"></i></Button>
                          </ButtonGroup>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Jumbotron>
              </Tab>

              <Tab eventKey={3} title="Church Adherence">
                <Button bsStyle='' style={style.saveBtn}>
                  <i class="fas fa-save"></i> Save
                </Button>

                <Form inline style={style.form}>
                  <FormGroup controlId="formInlineChurch">
                    <ControlLabel>Church Adherence:</ControlLabel>{' '}

                    <FormControl componentClass="select" id="church">
                      <option value="none" selected="selected">-- Select</option>
                      {churchAdherence.map((church) =>
                        <option value={church}>{church}</option>
                      )}
                    </FormControl>{' '}

                    <FormGroup controlId="formInlineChurchFrom">
                      <ControlLabel>From</ControlLabel>{' '}
                      <FormControl type="date" />
                    </FormGroup>{' '}

                    <FormGroup controlId="formInlineChurchTo">
                      <ControlLabel>To</ControlLabel>{' '}
                      <FormControl type="date" />
                    </FormGroup>{' '}

                    <Checkbox readOnly>
                      {' '}To present
                    </Checkbox>{' '}

                    <Button><i class="fas fa-plus"></i> Add</Button>
                  </FormGroup>
                </Form>

                <Jumbotron>
                  <Table striped bordered condensed hover responsive>
                    <thead>
                      <tr>
                        <th>Church Adherence</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Edit/Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>not a taxpayer for Church tax</td>
                        <td>01/01/1985</td>
                        <td>present</td>
                        <td>
                          <ButtonGroup>
                            <Button bsStyle='info'><i class="fas fa-edit"></i></Button>{' '}
                            <Button bsStyle='danger'><i class="fas fa-trash-alt"></i></Button>
                          </ButtonGroup>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Jumbotron>
              </Tab>

              <Tab eventKey={4} title='Disability Percentage'>
                <Button bsStyle='' style={style.saveBtn}>
                  <i class="fas fa-save"></i> Save
                </Button>

                <Form inline style={style.form}>
                  <FormGroup controlId="formInlineDisability">
                    <ControlLabel>Disability Percentage</ControlLabel>{' '}
                    <FormControl type='number' min='0' max='100' defaultValue='0' />
                  </FormGroup>{' '}

                  <FormGroup controlId="formInlineDisabilityFrom">
                    <ControlLabel>From</ControlLabel>{' '}
                    <FormControl type="date" />
                  </FormGroup>{' '}

                  <FormGroup controlId="formInlineDisabilityTo">
                    <ControlLabel>To</ControlLabel>{' '}
                    <FormControl type="date" />
                  </FormGroup>{' '}

                  <Checkbox readOnly>
                    {' '}To present
                  </Checkbox>{' '}

                  <Button><i class="fas fa-plus"></i> Add</Button>
                </Form>

                <Jumbotron>
                  <Table striped bordered condensed hover responsive>
                    <thead>
                      <tr>
                        <th>Disability Percentage</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Edit/Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>0%</td>
                        <td>01/01/1985</td>
                        <td>present</td>
                        <td>
                          <ButtonGroup>
                            <Button bsStyle='info'><i class="fas fa-edit"></i></Button>{' '}
                            <Button bsStyle='danger'><i class="fas fa-trash-alt"></i></Button>
                          </ButtonGroup>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Jumbotron>
              </Tab>

              <Tab eventKey={5} title='Income'>
                <Button bsStyle='' style={style.saveBtn}>
                  <i class="fas fa-save"></i> Save
                </Button>

                <Form inline style={style.form}>
                  <FormGroup controlId="formInlineJob">
                    <ControlLabel>Job Title</ControlLabel>{' '}
                    <FormControl type='text' placeholder='Enter job title' />
                  </FormGroup>{' '}

                  <FormGroup controlId="formInlineJobFrom">
                    <ControlLabel>From</ControlLabel>{' '}
                    <FormControl type="date" />
                  </FormGroup>{' '}

                  <FormGroup controlId="formInlineJobTo">
                    <ControlLabel>To</ControlLabel>{' '}
                    <FormControl type="date" />
                  </FormGroup>{' '}

                  <Checkbox readOnly>
                    {' '}To present
                  </Checkbox>{' '}

                  <Button><i class="fas fa-plus"></i> Add</Button>
                </Form>

                <Jumbotron>
                  <Tabs defaultActiveKey={1} id="edit-income-tabs">
                    <Tab eventKey={1} title='Job 1'>
                      <Form inline style={style.incomeForm}>
                        <FormGroup controlId="formInlineMontlyIncome">
                            <ControlLabel>Monthly Income</ControlLabel>{' '}
                            <InputGroup>
                              <InputGroup.Addon><i class="fas fa-euro-sign"></i></InputGroup.Addon>
                              <FormControl type="number" min='0' defaultValue='3000'/>
                            </InputGroup>
                        </FormGroup>{' '}

                        <FormGroup controlId="formInlineIncomeLimit">
                            <ControlLabel>Income Limit</ControlLabel>{' '}
                            <InputGroup>
                              <InputGroup.Addon><i class="fas fa-euro-sign"></i></InputGroup.Addon>
                              <FormControl type='number' min='0' defaultValue='36000'/>
                            </InputGroup>
                        </FormGroup>
                      </Form>

                      <div id='incomeTable' style={{marginTop: '20px'}}>
                        <h4>Year: 2018</h4>
                        <Table responsive striped bordered condensed hover>
                          <thead>
                            <th>Month</th>
                            <th>Income</th>
                            <th>Edit/Remove</th>
                          </thead>
                          <tbody>
                            <tr>
                              <td>April</td>
                              <td>3000</td>
                              <td>
                                <ButtonGroup>
                                  <Button bsStyle='info'><i class="fas fa-edit"></i></Button>{' '}
                                  <Button bsStyle='danger'><i class="fas fa-trash-alt"></i></Button>
                                </ButtonGroup>
                              </td>
                            </tr>
                            <tr>
                              <td>March</td>
                              <td>3000</td>
                              <td>
                                <ButtonGroup>
                                  <Button bsStyle='info'><i class="fas fa-edit"></i></Button>{' '}
                                  <Button bsStyle='danger'><i class="fas fa-trash-alt"></i></Button>
                                </ButtonGroup>
                              </td>
                            </tr>
                            <tr>
                              <td>February</td>
                              <td>3000</td>
                              <td>
                                <ButtonGroup>
                                  <Button bsStyle='info'><i class="fas fa-edit"></i></Button>{' '}
                                  <Button bsStyle='danger'><i class="fas fa-trash-alt"></i></Button>
                                </ButtonGroup>
                              </td>
                            </tr>
                            <tr>
                              <td>January</td>
                              <td>3000</td>
                              <td>
                                <ButtonGroup>
                                  <Button bsStyle='info'><i class="fas fa-edit"></i></Button>{' '}
                                  <Button bsStyle='danger'><i class="fas fa-trash-alt"></i></Button>
                                </ButtonGroup>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Tab>
                  </Tabs>
                </Jumbotron>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Grid>
    );
  }
}
