import qs from 'query-string'
import React, { Component } from 'react'
import { Link } from 'react-router'
import { Input, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import msu_logo from '../../assets/msu_logo.png'
import cmu_logo from '../../assets/cmu_logo.png'

class Education extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    const {screenWidth} = this.props;
    return (
      <section>
        <h2>Education</h2>
        <div className="institution">
          <div className="institution__image">
            <img src={msu_logo}/>
          </div>
          <div className="institution__info">
            <div className="institution__info_name">
              <h3>Michigan State University</h3>
            </div>
            <div className="institution__info_line">
              <h4>B.S. Computer Science</h4>
            </div>
            <div className="institution__info_line">
              <h4>B.S. Psychology</h4>
            </div>
            <div className="institution__info_line">
              <h4>2010-2015</h4>
            </div>
          </div>
        </div>
        <div className="institution">
          <div className="institution__image">
            <img src={cmu_logo}/>
          </div>
          <div className="institution__info">
            <div className="institution__info_name">
              <h3>Central Michigan University</h3>
            </div>
            <div className="institution__info_line">
              <h4>B.S. Psychology</h4>
            </div>
            <div className="institution__info_line">
              <h4>2008-2010</h4>
            </div>
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

export default withRouter(connect(mapStateToProps)(Education))
