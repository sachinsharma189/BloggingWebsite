import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Components/Style.css';
import Topnav from './Components/Navbar/Topnav';
import Bottomnav from './Components/Navbar/Bottomnav';
import Bannercard from './Components/Bannercards/Bannercard';
import Mainpost from './Components/Posts/Mainpost';
import Footer from './Components/Footer/Footer';
import Hamburger from './Components/Navbar/Hamburger';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Topnav/>
      <Bottomnav/>
      <Hamburger/>
      <Bannercard/>
      <Mainpost/>
      <Footer/>
      </div>
    );
  }
}

export default App;
