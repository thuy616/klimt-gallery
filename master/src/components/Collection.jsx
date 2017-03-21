import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

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
  }

  render() {
    const photos = this.props.collection ? this.props.collection.photos : [];
    // let loadedPhotos = photos;
    // if (this.state.componentMounted) {
    //   for (let i=0; i<photos.length; i++) {
    //     let p = photos[i];
    //     let img = new Image();
    //     img.src = p.thumbnail;
    //     img.onload = () => {
    //       loadedPhotos[i].height = img.height;
    //       loadedPhotos[i].width = img.width;
    //       // console.log("onload loadedPhotos[i]", loadedPhotos[i]);
    //       if (i == photos.length - 1) {
    //         console.log('loadedPhotos:', JSON.stringify(loadedPhotos));
    //       }
    //     }
    //   }
    // }

    return (
      <div className="collection">
        <section>
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
    )
  }
}

function mapStateToProps(state) {
  return {
    collection: state.content.collection
  }
}

export default connect(mapStateToProps, actions)(Collection);
