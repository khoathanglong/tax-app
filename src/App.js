import React, { Component } from 'react';
import Header from './headerAndFooter/header.js';
import Footer from './headerAndFooter/footer.js'


class App extends Component {
  render() {
    return (
      <div className="App" style={{fontFamily:'Questrial'}}> 
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default App;
