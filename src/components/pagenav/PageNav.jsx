import React, { Component } from 'react';
import './PageNav.scss';

class PageNav extends Component {
    constructor() {
        super();
        this.state = {
            pageArr: new Array(7).fill("hello")
        };
    }

    clickSpot(event, index) {
        this.props.emitNavIndex(index)
    }
    
    render() {
        return (
            <div className="page-nav-wrapper">
                {this.state.pageArr.map((e, i) => (
                    <div key={i} className={`nav-spot ${this.props.current === i ? 'nav-spot-selected' : ''}`} onClick={(e) => this.clickSpot(e, i)}></div>
                ))}
            </div>
        );
    }
}

PageNav.defaultProps = {
    last: false
};

export default PageNav;