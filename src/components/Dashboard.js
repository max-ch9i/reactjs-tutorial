import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTime } from '../actions';
import { getSpeed } from '../selectors';
import './Dashboard.css';

class Dashboard extends Component {
    updateTime = (e) => {
        this.props.updateTime(e.target.value);
    }
    render() {
        return (
            <section className="Dashboard">
                <div>{this.props.speed}</div>
                <div>
                    <label htmlFor="duration">
                        <span>Duration:</span>
                        <input onChange={this.updateTime} id="duration" type="number"/>
                        <span>years</span>
                    </label>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return { speed: getSpeed(state) };
};

export default connect(mapStateToProps, {
    updateTime
})(Dashboard);
