import React, { Component } from 'react';

class index extends Component {
    render() {
        return (
            <div className="warning">
                Number of results is <span>{this.props.numOfResult}</span>
            </div>
        );
    }
}

export default index;
