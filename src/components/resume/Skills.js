import qs from 'query-string'
import React, { Component } from 'react'
import { Link } from 'react-router'
import { Input, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Skill from './Skill'
import java_logo from '../../assets/java_logo_250x250.png'
import javascript_logo from '../../assets/javascript_logo_250x250.png'
import python_logo from '../../assets/python_logo_250x250.png'
import mssql_logo from '../../assets/mssql_logo_250x250.png'
import cplusplus_logo from '../../assets/cplusplus_logo_250x250.png'
import office_logo from '../../assets/office_logo.png'
import node_logo from '../../assets/node_logo.png'
import react_logo from '../../assets/react_logo.png'
import redux_logo from '../../assets/redux_logo.png'
import aws_logo from '../../assets/aws_logo.png'
import mongodb_logo from '../../assets/mongodb_logo.png'

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
          <Skill title="MongoDB" img={mongodb_logo} />
          <Skill title="Office" img={office_logo}/>
          <Skill title="Node" img={node_logo}/>
          <Skill title="React" img={react_logo}/>
          <Skill title="Redux" img={redux_logo}/>
          <Skill title="AWS" img={aws_logo}/>
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
