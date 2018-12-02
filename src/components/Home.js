import qs from 'query-string'
import React, { Component } from 'react'
import { Link } from 'react-router'
import { Input, Button } from 'react-bootstrap'
import NavBar from './NavBar'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Resume from './resume/Resume'
import Contact from './Contact'
import background_image from "../assets/detroit_bw.png"

class Home extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    const {screenWidth, screenHeight} = this.props;
    return (
      <div>
        <div className="img_container" style={{height: `${screenHeight}px`}}>
          <img src={background_image}/>
          <div className="centered">
            <h1>DERRICK DUNVILLE</h1>
            <h4>Software Engineer</h4>
          </div>
          </div>
        <Resume />
        <Contact />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      screenWidth: state.environment.screenWidth,
      screenHeight: state.environment.screenHeight
  }
}

export default withRouter(connect(mapStateToProps)(Home))
