import qs from 'query-string'
import React, { Component } from 'react'
import { Link } from 'react-router'
import { Input, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Skill from './Skill'
import java_logo from '../../assets/java_logo_250x250_bw.png'
import javascript_logo from '../../assets/javascript_logo_250x250_bw.png'
import python_logo from '../../assets/python_logo_250x250_bw.png'
import mssql_logo from '../../assets/mssql_logo_250x250_bw.png'
import cplusplus_logo from '../../assets/cplusplus_logo_250x250_bw.png'

class Skills extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    const {screenWidth} = this.props;
    return (
      <section>
        <h2>Skills</h2>
        <div className="interests">
          <Skill title="Java" img={java_logo}/>
          <Skill title="C++" img={cplusplus_logo} />
          <Skill title="Python" img={python_logo}/>
          <Skill title="Javascript" img={javascript_logo}/>
          <Skill title="MSSQL" img={mssql_logo} />
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

export default withRouter(connect(mapStateToProps)(Skills))
