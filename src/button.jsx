import React from 'react';

const Button = ({ onclick, label, color }) => {
    return (
        <div>
            <button
                className={`cursor-pointer px-4 py-2 rounded-md m-2 ${color}`}
                onClick={onclick}
            >
                {label}
            </button>
        </div>
    );
};

export default Button;
