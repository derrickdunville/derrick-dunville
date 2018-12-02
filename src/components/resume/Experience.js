import qs from 'query-string'
import React, { Component } from 'react'
import { Link } from 'react-router'
import { Input, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import thomson_reuters_logo from '../../assets/thomson_reuters_logo_light.png'

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
        <h4>Experience</h4>
        <div className="experience">
          <div className="institution">
            <div className="institution__image">
              <img src={thomson_reuters_logo}/>
            </div>
            <div className="institution__info">
              <div className="institution__info_name">
                Thomson Reuters Tax & Accounting
              </div>
              <div className="institution___info_line">
                Software Engineer
              </div>
              <div className="institution__info_line">
                2015-2017
              </div>
            </div>
          </div>
          <div className="institution">
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis dapibus cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis dapibus cursus.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis dapibus cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis dapibus cursus.</li>
            </ul>
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
