import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Spinner extends Component {
  render() {
    return (
      <Row>
        <Col md={12}>
          <div style ={{
            'height': '100vh',
            'display': 'flex',
            'alignItems': 'center',
            'justifyContent': 'center'
          }}>
            <div className="ball-scale-ripple">
              <div></div>
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}
