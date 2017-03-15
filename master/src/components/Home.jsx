import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import { Link } from 'react-router';
import ImageGallery from 'react-image-gallery';

export default class Home extends Component {
  render() {
    const images = [
      {
        original: '../img/header/cover1.jpg',
        thumbnail: '../img/header/cover1.jpg'
      },
      {
        original: '../img/header/cover2.jpg',
        thumbnail: '../img/header/cover2.jpg'
      },
      {
        original: '../img/header/cover3.jpg',
        thumbnail: '../img/header/cover3.jpg'
      },
      {
        original: '../img/header/cover4.jpg',
        thumbnail: '../img/header/cover4.jpg'
      },
      {
        original: '../img/header/cover5.jpg',
        thumbnail: '../img/header/cover5.jpg'
      }
    ];
    return (
      <header>
        <div className="header-content">
          <div className="slideshow-container">
          <ImageGallery
          items={images}
          autoPlay={true}
          showFullscreenButton={false}
          showBullets={true}
          showPlayButton={false}
          showNav={false}
          showThumbnails={false}
          slideInterval={5000}
          onImageLoad={this.handleImageLoad}/>
          </div>
          {/* <div className="header-content">
           <div className="header-content-inner">
             <h2 className="text-faded">"Art is a line around your thoughts."</h2>
             <h1 id="homeHeading">Gustav Klimt</h1>
             <a href="#" className="btn btn-primary">Explore</a>
           </div>
         </div> */}
         </div>
      </header>
    )
  }
}
