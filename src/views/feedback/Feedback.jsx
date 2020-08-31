import React, { Component } from 'react';
import './Feedback.scss';

class Feedback extends Component {
    constructor() {
        super();
        this.state = {
            
        };
    }

    render() {
        return (
            <div className="page">
                <span className="page-title">Leave your feedback to us :&#41;</span>
                <div className="input-block-wrapper">
                    <div className="input-block feedback-title">
                        <label class="input-label">Your title</label>
                        <input type="text" className="input feedback-title-input" placeholder="Input Text"></input>
                    </div>
                    <span className="input-block-addition">10 words maximum</span>
                </div>
                <div className="input-block-wrapper">
                    <div className="input-block feedback-content">
                        <label class="input-label">Text</label>
                        <textarea className="input feedback-content-input" rows="10" cols="30" placeholder="Input Text"></textarea> 
                    </div>
                </div>
                <div className="button-group">
                    <button className="button button-confirm my-button">Submit</button>
                    <button className="button button-cancel my-button">Not this time</button>
                </div>
            </div>
        );
    }
}

export default Feedback;