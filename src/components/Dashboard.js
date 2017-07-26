import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTime, updateDestination } from '../actions';
import './Dashboard.css';

import {
    getSpeed,
    getDestinationTitle,
    getDistance,
    getDestinationImg
} from '../selectors';

class Dashboard extends Component {
    updateTime = (e) => {
        this.props.updateTime(e.target.value);
    }
    updateDestination = (e) => {
        this.props.updateDestination(e.target.value);
    }
    render() {
        return (
            <section className="Dashboard">
                <div className="container">
                    <h1>Spaceport</h1>
                    {0 ? <div>{this.props.speed}</div> : null}
                    <div className="destination">
                        <div className="destination-image">
                            {this.props.destination
                                ? <img src={this.props.destinationImg} alt={this.props.destination}/>
                                : <span className="where">?</span>}
                        </div>
                    </div>
                    <div className="controls">
                        <ul className="destination-selector">
                            <li><button onClick={this.updateDestination} value="jupiter">Jupiter</button></li>
                            <li><button onClick={this.updateDestination} value="venus">Venus</button></li>
                        </ul>
                        <label htmlFor="duration">
                            <span>Duration:</span>
                            <input onChange={this.updateTime} id="duration" type="number"/>
                            <span>years</span>
                        </label>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        speed: getSpeed(state),
        destination: getDestinationTitle(state),
        distance: getDistance(state),
        destinationImg: getDestinationImg(state)
    };
};

export default connect(mapStateToProps, {
    updateTime,
    updateDestination
})(Dashboard);
