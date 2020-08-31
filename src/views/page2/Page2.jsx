import React, { Component } from 'react';
import './Page2.scss';

import ProcessPage from '@/components/processpage/ProcessPage.jsx';

class Page2 extends Component {
    constructor() {
        super();
        this.state = {
            
        };
    }

    render() {
        return (
            <ProcessPage title="Select your favourite transport">
                <div className="page-content2">
                    <button className="my-button">Bike & Walk</button>
                    <button className="my-button">Bus & Walk</button>
                </div>
            </ProcessPage>
        );
    }
}

export default Page2;