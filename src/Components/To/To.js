import React from 'react';

const To = () => {
    return (
        <div>
            <div>
            <label for="from">To</label><br /><br />
            <input type="text" className="border-bottom-only" name="to" placeholder="Select Destination" />
            <i class="fas fa-map-marker-alt"></i>
        </div>
        </div>
    );
};

export default To;