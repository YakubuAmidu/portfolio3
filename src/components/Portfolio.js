import React, { Component } from 'react';
import css from '../assets/css.png';
import './App.css';

class Portfolio extends Component {
  render() {
    return (
      <div className='app-portfolio'>
        <h1 className='heading-about'>ABOUT ME</h1>
        <p className='aboutme-paragraph'>
          Urna molestie at elementum eu facilisis. Ut porttitor leo a diam
          sollicitudin tempor id. Tortor consequat id porta nibh venenatis cras
          sed felis eget. Ac ut consequat semper viverra nam libero justo.
          Tristique magna sit amet purus gravida. Arcu felis bibendum ut
          tristique et. Commodo elit at imperdiet dui accumsan sit amet nulla
          facilisi. Commodo odio aenean sed adipiscing diam. Eu lobortis
          elementum nibh tellus molestie nunc non. Odio aenean sed adipiscing
          diam donec adipiscing tristique risus.
        </p>
        <hr />
        <div className='header-logos'>
          <div className='logos'>
            <i class='fas fa-file-code'></i>
            <p className='description'>
              1. Style beautiful website Style beautiful website
            </p>
          </div>
          <div className='logos'>
            <i class='fas fa-file-code'></i>
            <p className='description'>
              1. Style beautiful website Style beautiful website
            </p>
          </div>
          <div className='logos'>
            <i class='fas fa-file-code'></i>
            <p className='description'>
              1. Style beautiful website Style beautiful website
            </p>
          </div>
          <div className='logos'>
            <i class='fas fa-file-code'></i>
            <p className='description'>
              1. Style beautiful website Style beautiful website
            </p>
          </div>
        </div>
        <hr />
        <div className='app-projects'>
          <h1 className='heading-projects'>HIGHLIGHTED PROJECTS</h1>
          <div className='projects'>
            <img src={css} alt='css-img' className='cssone' />
            <img src={css} alt='css-img' className='cssone' />
            <img src={css} alt='css-img' className='cssone' />
            <img src={css} alt='css-img' className='cssone' />
            <img src={css} alt='css-img' className='cssone' />
            <img src={css} alt='css-img' className='cssone' />
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Portfolio;
