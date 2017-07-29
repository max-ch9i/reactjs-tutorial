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
        const currentDestination = this.props.destination;
        const nextDestination = nextProps.destination;
        const nextDestinationImg = nextProps.destinationImg;
        const imageElm = this.domImg;

        /*
         * Task 4. Animate in the new destination image
         *
         * Topics: state, lifecycle events.
         *
         * Help: https://facebook.github.io/react/docs/react-component.html#setstate
         *       https://facebook.github.io/react/docs/react-component.html#componentwillreceiveprops
         *
         * TODO: Compare the existing destination (currentDestination) with the new value coming in props (nextDestination).
         *       If they are different, update the state AFTER 400ms to allow the image to animate out first.
         *       Use planetTransition(imageElm, _ => {Update state here}) to animate and update the state in the callback argument
         */
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
















// Hint to Task 4: Do a strict comparison if (currentDestination !== nextDestination)























/*
 * Solution to Task 4:
 *
 *      if (currentDestination !== nextDestination) {
 *          planetTransition(imageElm, _ => {
 *              this.setState({
 *                  destination: nextDestination,
 *                  destinationImg: nextDestinationImg
 *              });
 *          });
 *      }
 */
