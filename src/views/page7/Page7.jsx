import React, { Component } from 'react';
import './Page7.scss';

import ProcessPage from '@/components/processpage/ProcessPage.jsx';

class Page7 extends Component {
    constructor() {
        super();
        this.state = {
            
        };
    }

    render() {
        return (
            <ProcessPage title="Time to start your tour!">
                <div className="page-content7">
                    <div className="view-wrapper">
                        <div className="view-block"></div>
                        <div className="view-block"></div>
                    </div>
                    <div className="bottom-bar">
                        <button className="my-button">Print!</button>
                        <span className="my-a my-a-underline">Hold on, I’ve got some new ideas…</span>
                    </div>
                </div>
            </ProcessPage>
        );
    }
}

export default Page7;