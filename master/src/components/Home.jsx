import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router';
import ImageGallery from 'react-image-gallery';
import _ from 'lodash';
import * as actions from '../actions';
import {connect} from 'react-redux';

class Home extends Component {

  componentWillMount() {
    this.props.fetchCollections();
  }

  render() {
    const {collections} = this.props;
    return (
      <header>
        <div className="collection-container">
          {collections.map((collection) => {
            return (
              <figure className="effect-chico" key={Math.random()}>
                <img src={collection.cover} alt="img"/>
                <figcaption>
                  <h2>
                    <span>{collection.name}</span>
                  </h2>
                  <p>{collection.about}</p>
                  <Link to={`/collections/${collection.slug}`}></Link>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </header>
    )
  }

}

function mapStateToProps(state) {
  return {collections: state.content.collections}
}

export default connect(mapStateToProps, actions)(Home);
