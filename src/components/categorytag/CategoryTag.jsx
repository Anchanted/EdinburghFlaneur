import React, { Component } from 'react';
import './CategoryTag.scss';

class CategoryTag extends Component {
    constructor() {
        super();
        this.state = {
            selected: false
        };
    }

    clickTag() {
        this.setState({
            selected: !this.state.selected
        })
    }

    render() {
        return (
            <div className="tag-wrapper my-button" onClick={() => this.clickTag()}>
                <span className="iconfont icon-favorite tag-icon" style={{color : this.state.selected ? '#ea907a' :  null}}></span>
                <span className="tag-text">{this.props.tagName}</span>
            </div>
        );
    }
}

export default CategoryTag;