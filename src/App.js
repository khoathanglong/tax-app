import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';

import Header from './component/header.js';
import Footer from './component/footer.js';
import TaxNews from './component/taxNews.js';
import HomePage from './component/home.js';
import EditProfile from './component/editProfile.js';
import Contact from './component/contact.js';
import Login from './component/login.js';


class App extends Component {
  render() {
    return (
      <Grid className="App" style={{fontFamily:'Questrial'}} fluid >
        <Header/>
        <Login />
        <Footer/>
      </Grid>
    );
  }
}

export default App;
