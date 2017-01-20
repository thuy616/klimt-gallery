import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContentWrapper from '../../components/Layout/ContentWrapper';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

class DynamicContent extends Component {
  handleButtonClick() {
    this.props.fetchContent();
  }

  render() {
    return (
      <div>
        <p> Click to fetch content from the server. </p>
        <Button className="btn btn-primary" onClick={this.handleButtonClick.bind(this)}>Click Me!</Button>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    content: state.content.secretContent
  }
}

export default connect(mapStateToProps, actions)(DynamicContent);
