import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';
import Spinner from './Spinner';
import { Link } from 'react-router';

class Collection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      componentMounted: false,
      photos: [],
      showSlideshow: false
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
    const { collection } = this.props;
    const photos = collection ? collection.photos : [];

    return (
      <div>
      { collection ?
        (
          <div className="collection-container">
            <section className="collection-hero">
              <img src={collection.hero} />
              <div className="collection-hero-content">
                <div className="collection-hero-content-inner">
                  <h2>{collection.name}</h2>
                  <p>{collection.about}</p>

                  <a href="#collection-grid" className="btn-circle page-scroll" style={{marginTop: '28px'}}>
                    <i className="fa fa-angle-double-down animated"></i>
                  </a>
                </div>

              </div>
            </section>
            <section className="collection-grid" id="collection-grid">
              {photos.map((p, index) => {
                const width = (p.width*200/p.height).toFixed(0);
                const paddingBottom = ((p.height/p.width)*100).toFixed(2);
                return (
                    <div key={p.slug} style={{width:`${width}px`,flexGrow:width}}>
                      <Link to={`/collections/${this.props.params.slug}/slideshow?active=${index}`}></Link>
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
