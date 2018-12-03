import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Form, Button, Input, Label, FormGroup, FormControl, ControlLabel, Checkbox, InputGroup} from 'react-bootstrap'
import ReCAPTCHA from 'react-google-recaptcha'

class Contact extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      recaptcha_token: ""
    };
    this.onReCaptchaChange = this.onReCaptchaChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {

  }
  handleChange(event) {
    if (event.target.name === 'name') {
      this.setState({ name: event.target.value })
    }
    if (event.target.name === 'email') {
      this.setState({ email: event.target.value })
    }
    if (event.target.name === 'subject') {
      this.setState({ subject: event.target.value })
    }
    if (event.target.name === 'message') {
      this.setState({ message: event.target.value })
    }
  }
  handleSubmit(event) {
    event.preventDefault()
    const { dispatch } = this.props;
    let newContact = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
      recaptcha_token: this.state.recaptcha_token
    }
    // dispatch(userActions.createUser(newUser))
    console.log("Contact Us form submitted")
    console.dir(newContact)
    this.setState({ name: '', email: '', subject: '', message: '', recaptcha_token: ''})
  }
  onReCaptchaChange(value){
    console.log("Captcha value: ", value);
    if(value === null){
      console.log("Captcha expired");
      this.setState({recaptcha_token : ''})
    } else {
      this.setState({recaptcha_token : value})
    }
  }
  render() {
    const {screenWidth} = this.props;
    return (
      <section>
        <h2>Contact</h2>
        <div>
          <Form onSubmit={() => { captcha.execute() }} >
            <FormGroup controlId="nameInput">
              <ControlLabel>Name</ControlLabel>
              <FormControl
                inputRef={ref => { this.nameInput = ref}}
                type="text"
                name="name"
                placeholder="Enter your name"
                value={this.state.name}
                onChange={::this.handleChange}
                />
            </FormGroup>
            <FormGroup controlId="emailInput">
              <ControlLabel>Email</ControlLabel>
              <FormControl
                inputRef={ref => { this.emailInput = ref}}
                type="email"
                name="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={::this.handleChange}
                />
            </FormGroup>
            <FormGroup controlId="subjectInput">
              <ControlLabel>Subject</ControlLabel>
              <FormControl
                inputRef={ref => { this.subjectInput = ref}}
                type="text"
                name="subject"
                placeholder="Enter subject"
                value={this.state.subject}
                onChange={::this.handleChange}
                />
            </FormGroup>
            <FormGroup controlId="messageInput">
              <ControlLabel>Message</ControlLabel>
              <FormControl
                inputRef={ref => { this.messageInput = ref}}
                type="text"
                componentClass="textarea"
                style={{resize: "vertical", minHeight: '80px'}}
                name="message"
                placeholder="Enter message"
                value={this.state.message}
                onChange={::this.handleChange}
                />
            </FormGroup>
            <Button
              bsStyle="success"
              onClick={this.handleSubmit}
              type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </section>
    );
  }
}

export default Contact
