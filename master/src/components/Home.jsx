import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import { Link } from 'react-router';
import ImageGallery from 'react-image-gallery';
import _ from 'lodash';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Home extends Component {

  componentWillMount() {
    this.props.fetchContent();
    this.props.fetchCollections();
  }

  render() {
    console.log("this.props.content", this.props.content);
    const collections = [
      {
        cover: '../img/header/cover1.jpg',
        name: 'Contemporary Art',
        about: 'The art of today'
      },
      {
        cover: '../img/header/cover2.jpg',
        name: 'Architecture & Design',
        about: 'Buildings, bridges, interesting objects or patterns...'
      },
      {
        cover: '../img/header/cover3.jpg',
        name: 'Cities & People',
        about: 'From the places that I have travelled to'
      },
      {
        cover: '../img/header/cover4.jpg',
        name: 'Portraits',
        about: 'Faces of friends and family'
      },
      {
        cover: '../img/header/cover5.jpg',
        name: 'Outdoors & Nature',
        about: 'A walk in the woods, hiking, or recreational sports'
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
  							<p>{collection.about}</p>
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

function mapStateToProps(state) {
  return {
    content: state.content.secretContent,
    collections: state.content.collections
  }
}

export default connect(mapStateToProps, actions)(Home);
