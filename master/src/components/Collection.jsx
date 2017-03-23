import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';
import Spinner from './Spinner';

class Collection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      componentMounted: false,
      photos: []
    }
  }

  componentWillMount() {
    this.props.fetchCollection(this.props.params.slug);
  }

  componentDidMount() {
    this.setState({
      componentMounted: true
    });
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
  }

  render() {
    const photos = this.props.collection ? this.props.collection.photos : [];
    // let loadedPhotos = photos;
    // if (this.state.componentMounted) {
    //   let count = 0;
    //   for (let i=0; i<photos.length; i++) {
    //     let p = photos[i];
    //     let img = new Image();
    //     img.src = p.thumbnail;
    //     img.onload = () => {
    //       loadedPhotos[i].height = img.height;
    //       loadedPhotos[i].width = img.width;
    //       count += 1;
    //       if (count == photos.length - 1) {
    //         console.log('loadedPhotos:', JSON.stringify(loadedPhotos));
    //       }
    //     }
    //   }
    // }

    return (
      <div>
      { this.props.collection ?
        (
          <div className="collection-container">
            <section className="collection-hero">
              <img src={this.props.collection.hero} />
              <div className="collection-hero-content">
                <div className="collection-hero-content-inner">
                  <h2>Ipsum lorem</h2>
                  <p>
                    Ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <a href="#collection-grid" className="btn-circle page-scroll">
                  <i className="fa fa-angle-double-down animated"></i>
                </a>
              </div>
            </section>
            <section className="collection-grid" id="collection-grid">
              {photos.map(p => {
                const width = p.width*200/p.height;
                const paddingBottom = p.height/p.width*100;
                return (
                  <div key={p.slug} style={{width:`${width}px`,flexGrow:width}}>
                    <i style={{paddingBottom:`${paddingBottom}%`}}></i>
                    <img src={p.thumbnail} />
                  </div>
                )
              })}
            </section>
          </div>
        ) : <Spinner />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    collection: state.content.collection
  }
}

export default connect(mapStateToProps, actions)(Collection);
