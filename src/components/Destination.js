import React, { Component } from 'react';
import './Destination.css';

import { TimelineLite, Power2 } from 'gsap';

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
            const tl = new TimelineLite();
            const animationDuration = .4;

            tl.to(this.domImg, animationDuration, { x: '300px',
                ease: Power2.easeIn,
                onComplete: _ => {
                    this.setState({
                        destination: nextProps.destination,
                        destinationImg: nextProps.destinationImg
                    });
                }
            })
            .set(this.domImg, { x: '-300px' })
            .to(this.domImg, animationDuration, { x: '0',
                ease: Power2.easeOut
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

