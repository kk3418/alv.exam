import React from 'react';

export default function Display({ display }) {
    return (
        <div className="display-area">
            <div className="display-box">
                <div className="display-text">
                    { display === '' ? '--' : display}
                </div>
            </div>
        </div>
    );
}