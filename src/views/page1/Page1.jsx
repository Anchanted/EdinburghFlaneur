import React, { Component } from 'react';
import './Page1.scss';

class Page1 extends Component {
    constructor() {
        super();
        this.state = {
            
        };
    }

    render() {
        return (
            // <div className="page" style={{backgroundImage: `url(${require('@/assets/image/cover.jpg')})`}}>
            <div className="page1">
                <div className="page-image" style={{backgroundImage: `url(${require('@/assets/image/cover.jpg')})`}}></div>
                <div className="top-nav">
                    <div className="brand">
                        <span className="brand-logo"></span>
                        <span className="brand-name">Edinburgh Flaneur</span>
                    </div>
                    <div className="nav-wrapper">
                        <span className="nav-text my-a my-a-underline">Main Site</span>
                        <span className="nav-text my-a my-a-underline">Leave Feedback</span>
                        <span className="nav-text my-a my-a-underline">Contact Us</span>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="text-title">Explore Edinburgh Cultural Space</div>
                    <div className="text-paragraph">Edinburgh Cultural Space focus on generating interest in Edinburgh’s cultural sector once the shutdown is over. Central to the tours are tour-guide pamphlets that can be physically printed and distributed on select bus lines and that showcase cultural spaces within 500 meters of each bus stop. The maps draw on the Edinburgh Culture and Community Mapping Project’s dataset of over 1000 cultural spaces and will be promoted by the Council’s Culture Office. The maps would be available on the Culture and Communities Mapping Project website and the City Council’s website</div>
                </div>
                <div className="start-button-wrapper">
                    <button className="my-button">Start your own tour by few steps</button>
                    <div className="my-a my-a-underline">I feel lucky today XD</div>
                </div>
                <div className="example-wrapper">
                    <div className="example-card">
                        <div className="example-location">
                            <span className="iconfont icon-place example-location-icon"></span>
                            <span className="example-location-text">Portobello, Edinburgh</span>
                        </div>
                        <div className="example-image" style={{backgroundImage: `url(${require('@/assets/image/example.jpg')})`}}></div>
                        <div className="example-detail">
                            <span className="example-detail-name">Along the costaline</span>
                            <div className="example-detail-line"></div>
                            <div className="example-detail-description">Discover Edinburgh local life along the coastline. Hot summer days, rocks, shrubs, bars, ice cream trucks and the Edinburgh shores…</div>
                        </div>
                    </div>
                    <div className="example-notice">
                        <span className="example-notice-text my-a my-a-underline">Have No Idea? Try This!</span>
                        <span className="iconfont icon-refresh example-notice-icon my-a"></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page1;