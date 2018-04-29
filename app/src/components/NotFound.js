import React, { Component } from 'react';

import notFound from './../assets/images/not_found.svg';

class NotFound extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="not-found pv6 center tc w-100">
                <img src={notFound} className="dib" alt="Not Found"/>
                <p className="not-found__text">User not Found</p>
            </div>
        );
    }
}

export default NotFound;
