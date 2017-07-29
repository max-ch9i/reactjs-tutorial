import React, { Component } from 'react';
import './DestinationSelector.css';

class DestinationSelector extends Component {
    static defaultProps = {
        catalog: {}
    }
    render() {
        const { catalog, updateDestination } = this.props;

        return(
            <ul className="destination-selector">
                {
                    Object.keys(catalog).map(destination =>
                        <li key={destination}>
                            <button className="btn-destination"
                                onClick={() => updateDestination(destination)}
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

