import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTime, updateDestination } from '../actions';
import './Dashboard.css';

import {
    getDestinationTitle,
    getDistance,
    getDestinationImg
} from '../selectors';

class Dashboard extends Component {
    updateTime = (e) => {
        if (e.which === 13) {
            e.preventDefault();
        }
        this.props.updateTime(e.target.textContent);
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
                            <li><button className="btn-destination" onClick={this.updateDestination} value="jupiter">Jupiter</button></li>
                            <li><button className="btn-destination" onClick={this.updateDestination} value="venus">Venus</button></li>
                        </ul>
                        <div>
                            Fly there for <span contentEditable="true" className="duration" onKeyUp={this.updateTime}></span> years
                        </div>
                    </div>
                    <div className="summary">
                        {!this.props.destination
                                ? <div className="hint">Choose your destination</div>
                                : !this.props.duration
                                    ? <div className="hint">Choose your duration</div>
                                    : null}
                        {this.props.speed && isFinite(this.props.speed)
                                ? <div className="resultant-speed">
                                    <span className="resultant-label">Your speed will be</span>
                                    <span className="resultant-value" data-unit="km/s">{this.props.speed.toFixed(0)}</span>
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
        destination: getDestinationTitle(state),
        distance: getDistance(state),
        destinationImg: getDestinationImg(state)
    };
};

export default connect(mapStateToProps, {
    updateTime,
    updateDestination
})(Dashboard);
