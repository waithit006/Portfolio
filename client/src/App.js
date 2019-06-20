import React from 'react';
import './index.sass';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <div className="container-fluid">
       <Navbar />
       <section className="hero is-link is-fullheight-with-navbar">
  <div className="hero-body">
    <div className="container">
    <div className="timeline is-centered">
  <header className="timeline-header">
    <span className="tag is-medium is-primary">Start</span>
  </header>
  <div className="timeline-item is-primary">
    <div className="timeline-marker is-primary"></div>
    <div className="timeline-content">
      <p className="heading">January 2016</p>
      <p>Timeline content - Can include any HTML element</p>
    </div>
  </div>
  <div className="timeline-item is-warning">
    <div className="timeline-marker is-warning is-image is-32x32">
      <img src="http://bulma.io/images/placeholders/32x32.png"/>
    </div>
    <div className="timeline-content">
      <p className="heading">February 2016</p>
      <p>Timeline content - Can include any HTML element</p>
    </div>
  </div>
  <header className="timeline-header">
    <span className="tag is-primary">2017</span>
  </header>
  <div className="timeline-item is-danger">
    <div className="timeline-marker is-danger is-icon">
      <i className="fa fa-flag"></i>
    </div>
    <div className="timeline-content">
      <p className="heading">March 2017</p>
      <p>Timeline content - Can include any HTML element</p>
    </div>
  </div>
  <header className="timeline-header">
    <span className="tag is-medium is-primary">End</span>
  </header>
</div>
    </div>
  </div>
</section>
  </div>
  );
}

export default App;
