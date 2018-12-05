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
            <h4>derrickdunville@gmail.com</h4>
            <h4>Software Engineer</h4>
            <h4>Detroit, MI</h4>
            <div className="social">
              <a href="https://www.github.com/derrickdunville">
                <img alt="Github" src={"https://img.icons8.com/ios/96/F9F9F9/github-filled.png"}/>
              </a>
              <a href="https://www.linkedin.com/in/dunville/">
                <img src="https://img.icons8.com/ios/96/F9F9F9/linkedin-filled.png"/>
              </a>
            </div>
          </div>
        </div>
        <Resume />
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
