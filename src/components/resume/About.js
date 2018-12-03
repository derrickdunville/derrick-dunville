import qs from 'query-string'
import React, { Component } from 'react'
import { Link } from 'react-router'
import { Input, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import derrick from "../../assets/derrick_bw.png"


class About extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    const {screenWidth} = this.props;
    return (
      <section className="about">
        <h2>About</h2>
        <div className="about">
          <div className="about__content">
            <p>Creative and motivated individual, with five years of object-oriented programming experience, seeking a Software Engineering position focusing on the development and improvement of user applications and the end-user experience.</p>
          </div>
          <div className="about__img">
            <img src={derrick}/>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
      screenWidth: state.environment.screenWidth
  }
}

export default withRouter(connect(mapStateToProps)(About))
