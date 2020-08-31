import React, { Component } from 'react';
import './Page3.scss';

import ProcessPage from '@/components/processpage/ProcessPage.jsx';

class Page3 extends Component {
    constructor() {
        super();
        this.state = {
            
        };
    }

    render() {
        return (
            <ProcessPage title="Tell us your start & end points">
                <div className="page-content3">
                    <div className="waypoint-search-group">
                        <div className="waypoint-search">
                            <div className="waypoint-search-type">Start*</div>
                            <div className="search-bar">
                                <input type="text" placeholder="Keywords, landmark or postcode…"/>
                                <button className="my-button">Search</button>
                            </div>
                        </div>
                        <div className="waypoint-search">
                            <div className="waypoint-search-type">via</div>
                            <div className="search-bar">
                                <input type="text" placeholder="Keywords, landmark or postcode…"/>
                                <button className="my-button">Search</button>
                            </div>
                        </div>
                        <div className="waypoint-search">
                            <div className="waypoint-search-type">End*</div>
                            <div className="search-bar">
                                <input type="text" placeholder="Keywords, landmark or postcode…"/>
                                <button className="my-button">Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="map"></div>
                </div>
            </ProcessPage>
        );
    }
}

export default Page3;