import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Navbar from './Navbar';

class KlimtBase extends React.Component {

    render() {

        const animationName = 'rag-fadeIn'

        return (
            <div>
                <Navbar />
                <ReactCSSTransitionGroup
                  component="section"
                  transitionName={animationName}
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}
                >
                  {React.cloneElement(this.props.children, {
                    key: Math.random()
                  })}
                </ReactCSSTransitionGroup>

            </div>
        );
    }

}

export default KlimtBase;
