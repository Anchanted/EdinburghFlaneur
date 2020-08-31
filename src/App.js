import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Page1 from '@/views/page1/Page1.jsx';
import Page2 from '@/views/page2/Page2.jsx';
import Page3 from '@/views/page3/Page3.jsx';
import Page4 from '@/views/page4/Page4.jsx';
import Page5 from '@/views/page5/Page5.jsx';
import Page6 from '@/views/page6/Page6.jsx';
import Page7 from '@/views/page7/Page7.jsx';
import Page8 from '@/views/page8/Page8.jsx';
// import FeedbackSuccess from '@/views/feedback/FeedbackSuccess.jsx';
import PageNav from '@/components/pagenav/PageNav.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPageIndex: 0
    };
  }

  clickNavSpot = (i) => {
    this.setState({
      currentPageIndex: i
    })
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Page1></Page1>
        <Page2></Page2>
        <Page3></Page3>
        <Page4></Page4>
        <Page5></Page5>
        <Page6></Page6>
        <Page7></Page7>
        <Page8></Page8>
        {/* <FeedbackSuccess></FeedbackSuccess> */}
        <PageNav current={this.state.currentPageIndex} emitNavIndex={(i) => this.clickNavSpot(i)}></PageNav>
      </div>
    );
  }
}

export default App;
