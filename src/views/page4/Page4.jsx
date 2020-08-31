import React, { Component } from 'react';
import './Page4.scss';

import ProcessPage from '@/components/processpage/ProcessPage.jsx';

class Page4 extends Component {
    constructor() {
        super();
        this.state = {
            
        };
    }

    render() {
        return (
            <ProcessPage title="Set your favourite range of tour">
                <div className="page-content4">
                    <div className="distance-selector-wrapper">
                        <div className="distance-selector-title">Adjust the distance from route</div>
                    </div>
                    <div className="map"></div>
                </div>
            </ProcessPage>
        );
    }
}

export default Page4;