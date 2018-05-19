import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import {Switch, Route} from 'react-router-dom';
import Header from './component/header.js';
import Footer from './component/footer.js';
import TaxNews from './component/taxNews.js';
import HomePage from './component/home.js';
import EditProfile from './component/editProfile.js';
import Profile from './component/profile.js';
import Settings from './component/settings.js';
import Contact from './component/contact.js';
import Login from './component/login.js';


class App extends Component {
  render() {
    return (
      <Grid className="App" style={{fontFamily:'Questrial'}} fluid >
        <Header/>
        	<Switch>
        		<Route exact path='/' component={HomePage} />
        		<Route exact path='/news' component={TaxNews} />
        		<Route exact path='/login' component={Login} />
        		<Route exact path='/contact' component={Contact} />
        		<Route exact path='/settings' component={Settings} />
        		<Route exact path='/profile' component={Profile} />
        		<Route exact path='/editprofile' component={EditProfile} />
        		<Route path='/:params' component={HomePage} />{/* other paths*/}
        	</Switch>
        <Footer/>
      </Grid>
    );
  }
}

export default App;
