import qs from 'query-string'
import React, { Component } from 'react'
import { Link } from 'react-router'
import { Input, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import About from './About'
import Skills from './Skills'
import Interests from './Interests'
import Education from './Education'
import Experience from './Experience'
import Contact from '../Contact'

class Resume extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    const {screenWidth} = this.props;
    return (
      <div className="app_container">
        <div className="left">
          <About />
          <Skills />
        </div>
        <div className="right">
          <Experience />
          <Education />
          <Interests/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      screenWidth: state.environment.screenWidth
  }
}

export default withRouter(connect(mapStateToProps)(Resume))
