import React from 'react';

const ErrorLogin = (props) => {
    return (
        <div>
            {props.error ?
                <div className="alert alert-danger" role="alert">
                    {props.error}
                </div>
                : ''}
        </div>
    );
};

export default ErrorLogin;