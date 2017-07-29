import React, { Component } from 'react';
import './Destination.css';
import planetTransition from '../animations/planet-transition';

class Destination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            destination: null,
            destinationImg: null
        };
    }
    componentDidMount() {
        this.setState({
            destination: this.props.destination,
            destinationImg: this.props.destinationImg
        });
    }
    componentWillReceiveProps(nextProps) {
        const {destination} = this.props;

        if (nextProps.destination !== destination) {
            const animationDuration = .4;

            planetTransition(this.domImg, animationDuration, () => {
                this.setState({
                    destination: nextProps.destination,
                    destinationImg: nextProps.destinationImg
                });
            });
        }
    }
    render() {
        return(
            <div className="destination">
                <div ref={img => {this.domImg = img}} className="destination-image">
                    {this.state.destination
                        ? <img src={this.state.destinationImg} alt={this.state.destination}/>
                        : <span className="where">?</span>}
                </div>
            </div>
        );
    }
}

export default Destination;

