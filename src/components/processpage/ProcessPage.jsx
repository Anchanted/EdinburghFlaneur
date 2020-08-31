import React, { Component } from 'react';
import './ProcessPage.scss';

class ProcessPage extends Component {
    render() {
        return (
            <div className="page">
                <span className="iconfont icon-arrow-up router-icon router-icon-up"></span>
                {
                    !this.props.last ? <span className="iconfont icon-arrow-down router-icon router-icon-down"></span> : null
                }
                <div className="page-content-wrapper">
                    <div className="page-content-title">{this.props.title}</div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ProcessPage.defaultProps = {
    last: false
};

export default ProcessPage;