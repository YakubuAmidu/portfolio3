import React, { Component } from 'react';
import css from '../assets/css.png';
import profile2 from '../assets/profile2.png';
import Title from './Title';
import { Row, Col, Button } from 'react-bootstrap';
import './App.css';

class Portfolio extends Component {
  state = {
    displayBio: false,
  };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div className='app-portfolio'>
        <h1 className='heading-about'>ABOUT ME</h1>
        <img src={profile2} alt='profile2-img' className='profile2' />
        <div className='aboutme-paragraph'>
          <h1 className='hello'>Hello!</h1>
          <p>I am a reactjs developer</p>
          <Title />
          {this.state.displayBio ? (
            <div className='paragraph-header'>
              <p className='paragraph'>
                Urna molestie at elementum eu facilisis. Ut porttitor leo a diam
                sollicitudin tempor id. Tortor consequat id porta nibh venenatis
                cras sed felis eget. Ac ut consequat semper viverra nam libero
                justo. Tristique magna sit amet purus gravida. Arcu felis
                bibendum ut tristique et. Commodo elit at imperdiet dui accumsan
              </p>
              <Button
                className='btn btn-read'
                variant='outline-dark'
                onClick={this.toggleDisplayBio}
              >
                read less
              </Button>
            </div>
          ) : (
            <div>
              <Button
                className='btn btn-read'
                variant='outline-dark'
                onClick={this.toggleDisplayBio}
              >
                read more
              </Button>
            </div>
          )}
        </div>
        <hr />

        <div className='header-logos'>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <div className='logos'>
                <i className='fas fa-file-code'></i>
                <p className='description'>
                  1. Style beautiful website Style beautiful website
                </p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className='logos'>
                <i className='fas fa-file-code'></i>
                <p className='description'>
                  1. Style beautiful website Style beautiful website
                </p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className='logos'>
                <i className='fas fa-file-code'></i>
                <p className='description'>
                  1. Style beautiful website Style beautiful website
                </p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className='logos'>
                <i className='fas fa-file-code'></i>
                <p className='description'>
                  1. Style beautiful website Style beautiful website
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <hr />
        <div className='app-projects'>
          <h1 className='heading-projects'>PROJECTS</h1>
          <div className='projects'>
            <img src={css} alt='css-img' className='cssone' />
            <img src={css} alt='css-img' className='cssone' />
            <img src={css} alt='css-img' className='cssone' />
            <img src={css} alt='css-img' className='cssone' />
            <img src={css} alt='css-img' className='cssone' />
            <img src={css} alt='css-img' className='cssone' />
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
