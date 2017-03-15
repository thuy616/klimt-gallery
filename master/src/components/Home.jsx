import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import { Link } from 'react-router';
import ImageGallery from 'react-image-gallery';
import _ from 'lodash';

export default class Home extends Component {
  render() {
    const collections = [
      {
        cover: '../img/header/cover1.jpg',
        name: 'Contemporary Art',
        nutshell: 'The art of today'
      },
      {
        cover: '../img/header/cover2.jpg',
        name: 'Architecture & Design',
        nutshell: 'Buildings, bridges, interesting objects or patterns...'
      },
      {
        cover: '../img/header/cover3.jpg',
        name: 'Cities & People',
        nutshell: 'From the places that I have travelled to'
      },
      {
        cover: '../img/header/cover4.jpg',
        name: 'Portraits',
        nutshell: 'Faces of friends and family'
      },
      {
        cover: '../img/header/cover5.jpg',
        name: 'Outdoors & Nature',
        nutshell: 'A walk in the woods, hiking, or recreational sports'
      }
    ];
    return (
      <header>
        <div className="collection-container">
        {collections.map((collection) => {
          return (
            <figure className="effect-chico" key={Math.random()}>
  						<img src={collection.cover} alt="img"/>
  						<figcaption>
  							<h2><span>{collection.name}</span></h2>
  							<p>{collection.nutshell}</p>
  						</figcaption>
  					</figure>
          )
        })}
        </div>
        {/* <ImageGallery
        items={images}
        autoPlay={true}
        showFullscreenButton={false}
        showBullets={true}
        showPlayButton={false}
        showNav={false}
        showThumbnails={false}
        slideInterval={5000}
        onImageLoad={this.handleImageLoad}/>
        </div> */}
        {/* <div className="header-content">
         <div className="header-content-inner">
           <h2 className="text-faded">"Art is a line around your thoughts."</h2>
           <h1 id="homeHeading">Gustav Klimt</h1>
           <a href="#" className="btn btn-primary">Explore</a>
         </div>
       </div> */}
      </header>
    )
  }
}
