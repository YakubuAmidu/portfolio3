import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from './Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <div className='app-header'>
          <h1 className='heading'>SOFWARE DEVELOPER</h1>
          <h3 className='skills'>
            CSS, GRID, FLEX-BOX, ANIMATION, BOOTSTRAP, SASS
          </h3>
          <Button className='findoutmore' variant='outline-dark'>
            <Link to='/portfolio' className='find'>
              Find out more
            </Link>
          </Button>
          <div className='social-links'>
            <p className='connect'>Connect with me</p>
            <i className='fab fa-github-square'></i>
            <i className='fab fa-linkedin'></i>
            <i className='fab fa-twitter-square'></i>
            <i className='fab fa-facebook-square'></i>
            <i className='fab fa-facebook-square'></i>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
