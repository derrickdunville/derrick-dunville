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
        <h2>Experience</h2>
        <div className="experience">
          <div className="institution">
            <div className="institution__image">
              <img src={thomson_reuters_logo}/>
            </div>
            <div className="institution__info">
              <div className="institution__info_name">
                <h3>Thomson Reuters Tax & Accounting</h3>
              </div>
              <div className="institution___info_line">
                <h4>Software Engineer</h4>
              </div>
              <div className="institution__info_line">
                <h4>2015-2017</h4>
              </div>
            </div>
            <div className="institution__details">
              <div>
                <p>Worked on a large team responsible for new development and maintenance of the companys interenal enterprise management solution (EMS).</p>
              </div>
            </div>
            <div className="projects">
              <div><h3>Projects</h3></div>
              <div>
                <h4>TL/UB and Product Version Maintenance</h4>
                <h4>3 months</h4>
                <p>Implemented a tracking system to track product versions and corresponding release documentation for the company’s software products.</p>
              </div>
              <div className="divider"></div>
              <div>
                <h4>Server Migration</h4>
                <h4>12 months</h4>
                <p>Assisted with researching EMS’s application architecture, reproducing the architecture in a cloud environment and migrating the application from servers in Ann Arbor, MI to servers in our data center in Eagan, MN.</p>
              </div>
              <div className="divider"></div>
              <div>
                <h4>MyPay Solutions Migration</h4>
                <h4>14 months</h4>
                <p>Worked with an internal business unit to migrate their entire workflow and business logic from a Microsoft InfoPath/Access database design into EMS. Consisted of new Java Swing development and rebuilding the Access database design in our MSSQL database.
                </p>
              </div>
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
