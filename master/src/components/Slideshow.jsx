import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import _ from 'lodash';
import PhotoSlider from './PhotoSlider';
import Spinner from './Spinner';
import * as actions from '../actions';

class Slideshow extends Component {

  componentWillMount() {
    if (this.props.collection == null) {
      this.props.fetchCollection(this.props.params.slug);
    }
  }

  render() {
    const activePhoto = this.props.location.query.active;
    return (
        <div>
        {this.props.collection ? (
          <PhotoSlider
            collectionSlug={this.props.collection.slug}
            photos={this.props.collection.photos}
            activePhoto={activePhoto}
          />
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

export default connect(mapStateToProps, actions)(Slideshow);
