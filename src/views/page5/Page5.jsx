import React, { Component } from 'react';
import './Page5.scss';

import ProcessPage from '@/components/processpage/ProcessPage.jsx';
import CategoryTag from '@/components/categorytag/CategoryTag.jsx';

class Page5 extends Component {
    constructor() {
        super();
        this.state = {
            
        };
    }

    render() {
        return (
            <ProcessPage title="Which topics are you interested in?">
                <div className="page-content5">
                    <div className="category-wrapper">
                        <div className="category-title">Select the topics you like</div>
                        <div className="category-content-area">
                            <CategoryTag tagName="Category"></CategoryTag>
                            <CategoryTag tagName="Category"></CategoryTag>
                            <CategoryTag tagName="Category"></CategoryTag>
                        </div>
                        <div className="category-sub-content-area">
                            <CategoryTag tagName="Sub"></CategoryTag>
                            <CategoryTag tagName="Sub"></CategoryTag>
                            <CategoryTag tagName="Sub"></CategoryTag>
                        </div>
                        <div className="category-title">Or search by keywords</div>
                        <div className="search-bar">
                            <input type="text" placeholder="Type here"/>
                            <button className="my-button">Search</button>
                        </div>
                    </div>
                    <div className="map"></div>
                </div>
            </ProcessPage>
        );
    }
}

export default Page5;