import React, { Component } from 'react';
import './FeedbackSuccess.scss';

class FeedbackSuccess extends Component {
    constructor() {
        super();
        this.state = {
            
        };
    }

    render() {
        return (
            <div className="page">
                <span className="page-text">Submitted! Cheers :)</span>
                <span className="iconfont icon-done page-icon"></span>
                <button className="page-button my-button">Back to top</button>
            </div>
        );
    }
}

export default FeedbackSuccess;