import React from 'react';

const Hint = ({destination, duration}) => 
    !destination ? <div className="hint">Choose your destination</div>
        : !duration ? <div className="hint">Choose your duration</div>
        : null;

export default Hint;
