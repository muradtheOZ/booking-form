import React from 'react';
import './Form.css'

const From = () => {
    return (
        <div>
            <label for="from">From</label><br /><br />
            <input type="text" className="border-bottom-only" name="from" placeholder="Select Departure" />
            <i class="fas fa-map-marker-alt"></i>
        </div>
    );
};

export default From;