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
        <h2>Interests</h2>
        <div className="interests">
          <Interest title="Golfing" src="https://img.icons8.com/material/96/cbcbcb/golf.png"/>
          <Interest title="Longboarding" src="https://img.icons8.com/material/96/cbcbcb/skateboard.png"/>
          <Interest title="Skiing" src="https://img.icons8.com/material/96/cbcbcb/skiing.png"/>
          <Interest title="Gaming" src="https://img.icons8.com/material/96/cbcbcb/controller.png" />
          <Interest title="Music" src="https://img.icons8.com/material/96/cbcbcb/headphones.png"/>
          <Interest title="Stocks" src="https://img.icons8.com/material/96/cbcbcb/stocks.png"/>
          <Interest title="Computers" src="https://img.icons8.com/material/96/cbcbcb/workstation.png"/>
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
