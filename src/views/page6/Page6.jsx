import React, { Component } from 'react';
import './Page6.scss';

import ProcessPage from '@/components/processpage/ProcessPage.jsx';

class Page6 extends Component {
    constructor() {
        super();
        this.state = {
            
        };
    }

    render() {
        return (
            <ProcessPage title="Are these your spots for tour?">
                <div className="page-content6">
                    <div className="spot-wrapper">
                        <div className="spot-top-area">
                            <div className="spot-title">Select to remove the spots</div>
                            <div className="spot-content-area">
                                <div className="button-group">
                                    <button>Enabled</button>
                                    <button>Enabled</button>
                                    <button>Enabled</button>
                                    <button>Enabled</button>
                                    <button>Enabled</button>
                                </div>
                            </div>
                        </div>
                        <div className="spot-bottom-bar">
                            <button className="my-button">Remove</button>
                            <span className="my-a">Redo</span>
                        </div>
                    </div>
                    <div className="map"></div>
                </div>
            </ProcessPage>
        );
    }
}

export default Page6;