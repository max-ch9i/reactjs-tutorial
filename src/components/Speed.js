import React, { Component } from 'react';

class Speed extends Component {
    render() {
        const { speed } = this.props;

        if (speed && isFinite(speed)) {
            return <div className="resultant-speed">
                <span className="resultant-label">Your speed will be</span>
                <span className="resultant-value" data-unit="km/s">{speed.toFixed(0)}</span>
            </div>;
        }

        return null;
    }
};

export default Speed;
