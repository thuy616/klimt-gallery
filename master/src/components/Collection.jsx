import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Collection extends Component {

  componentWillMount() {
    this.props.fetchCollection(this.props.params.slug);
  }

  render() {
    return (
      <div>test</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    collection: state.collection
  }
}

export default connect(mapStateToProps, actions)(Collection);
