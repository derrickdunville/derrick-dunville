import qs from 'query-string'
import React, { Component } from 'react'
import { Link } from 'react-router'
import { Input, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Interest extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      src: this.props.src,
      title: this.props.title
    };
  }

  render() {
    const {screenWidth} = this.props;
    return (
      <div className='interest__container'>
        <div className='interest'>
          <div className="interest__image">
            <img src={this.props.src}/>
          </div>
          <div className="interest__title">
            <h4>{this.props.title}</h4>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      screenWidth: state.environment.screenWidth
  }
}

export default withRouter(connect(mapStateToProps)(Interest))
