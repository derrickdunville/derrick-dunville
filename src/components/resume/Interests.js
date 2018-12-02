import qs from 'query-string'
import React, { Component } from 'react'
import { Link } from 'react-router'
import { Input, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Interest from './Interest'

class Interests extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    const {screenWidth} = this.props;
    return (
      <section>
        <h4>Interests</h4>
        <div className="interests">
          <Interest title="Golfing" src="https://img.icons8.com/material/96/FFFFFF/golf.png"/>
          <Interest title="Longboarding" src="https://img.icons8.com/material/96/FFFFFF/skateboard.png"/>
          <Interest title="Skiing" src="https://img.icons8.com/material/96/FFFFFF/skiing.png"/>
          <Interest title="Gaming" src="https://img.icons8.com/material/96/FFFFFF/controller.png" />
          <Interest title="Music" src="https://img.icons8.com/material/96/FFFFFF/headphones.png"/>
          <Interest title="Stocks" src="https://img.icons8.com/material/96/FFFFFF/stocks.png"/>
          <Interest title="Computers" src="https://img.icons8.com/material/96/FFFFFF/workstation.png"/>
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

export default withRouter(connect(mapStateToProps)(Interests))
