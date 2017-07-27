import React, { Component } from 'react';
import './DestinationSelector.css';

class DestinationSelector extends Component {
    render() {
        const { catalog, updateDestination } = this.props;

        return(
            <ul className="destination-selector">
                { 
                    Object.keys(catalog).map(destination => 
                        <li>
                            <button className="btn-destination"
                                onClick={updateDestination}
                                value={destination}>
                                {catalog[destination].title}
                            </button>
                        </li>)
                }
            </ul>
        );
    }
}

export default DestinationSelector;

