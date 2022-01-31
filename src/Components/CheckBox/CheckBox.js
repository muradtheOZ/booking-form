import React from 'react';

const CheckBox = () => {
    return (
        <div className="d-flex">
            <div className="form-check p-5">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" for="flexRadioDefault1">
                    One Way
                </label>
            </div>
            <div className="form-check p-5">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label className="form-check-label" for="flexRadioDefault2">
                    Round Trip
                </label>
            </div>
        </div>
    );
};

export default CheckBox;