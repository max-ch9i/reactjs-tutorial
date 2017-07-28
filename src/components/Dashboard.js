import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTime, updateDestination } from '../actions';
import './Dashboard.css';
import Destination from './Destination';
import Title from './Title';
import DestinationSelector from './DestinationSelector';

import {
    getDestinationTitle,
    getDistance,
    getDestinationImg
} from '../selectors';

class Dashboard extends Component {
    preventEnter = (e) => {
        if (e.which === 13) {
            e.preventDefault();
        }
    }
    updateTime = (e) => {
        this.props.updateTime(e.target.textContent);
    }
    updateDestination = (destination) => {
        this.props.updateDestination(destination);
    }
    render() {
        const { destination, destinationImg, duration, speed, catalog } = this.props;

        return (
            <section className="Dashboard">
                <div className="container">
                    <Title text="Spaceport" />
                    <Destination destination={destination} destinationImg={destinationImg} />
                    <div className="controls">
                        <DestinationSelector updateDestination={this.updateDestination} catalog={catalog} />
                        <div className="duration-style">Fly there for <span contentEditable="true" className="duration" onKeyDown={this.preventEnter} onKeyUp={this.updateTime}></span> years</div>
                    </div>
                    <div className="summary">
                        {!destination
                            ? <div className="hint">Choose your destination</div>
                            : !duration
                            ? <div className="hint">Choose your duration</div>
                            : null}
                        {speed && isFinite(speed)
                                ? <div className="resultant-speed">
                                    <span className="resultant-label">Your speed will be</span>
                                    <span className="resultant-value" data-unit="km/s">{speed.toFixed(0)}</span>
                                  </div>
                                : null}
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        speed: state.speed,
        duration: state.duration,
        catalog: state.catalog,
        destination: getDestinationTitle(state),
        distance: getDistance(state),
        destinationImg: getDestinationImg(state)
    };
};

export default connect(mapStateToProps, {
    updateTime,
    updateDestination
})(Dashboard);
