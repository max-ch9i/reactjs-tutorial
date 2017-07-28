import React from 'react';

export default ({destination, duration}) => 
    !destination ? <div className="hint">Choose your destination</div>
        : !duration ? <div className="hint">Choose your duration</div>
        : null;

