import React, { Component } from 'react';
import './Page8.scss';

import ProcessPage from '@/components/processpage/ProcessPage.jsx';

class Page8 extends Component {
    constructor() {
        super();
        this.state = {
            
        };
    }

    render() {
        return (
            <ProcessPage title="Congrats! Enjoy your tour :)" last="true">
                <div className="page-content8">
                    <div className="iconfont icon-done main-icon"></div>
                    <div className="bottom-bar">
                        <div className="bottom-bar-text">Would you like to share this to the public?</div>
                        <div className="bottom-bar-button-group">
                            <button className="bottom-bar-button button-confirm my-button">Sure!</button>
                            <button className="bottom-bar-button button-cancel my-button">Nope</button>
                        </div>
                    </div>
                </div>
            </ProcessPage>
        );
    }
}

export default Page8;