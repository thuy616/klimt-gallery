import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Navbar from './Navbar';

class Base extends React.Component {

    render() {

        return (
            <div className="wrapper">
                <Navbar />
                  {React.cloneElement(this.props.children, {
                    key: Math.random()
                  })}
            </div>
        );
    }

}

export default Base;
