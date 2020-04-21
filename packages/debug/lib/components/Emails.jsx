import Grudr from 'meteor/grudr:lib';
import { Messages } from "meteor/grudr:core";
import GrudrEmail from 'meteor/grudr:email';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Actions from "../actions.js";
import { Jumbotron, Container, Row, Col, Button } from 'react-bootstrap';

const Loading = Grudr.components.Loading;

class Email extends Component {

  constructor() {
    super();
    this.sendTest = this.sendTest.bind(this);
    this.state = {
      loading: false
    }
  }

  sendTest() {
    this.setState({loading: true});

    Actions.call("email.test", this.props.name, (error, result) => {
      this.setState({loading: false});
      if (error) {
        Messages.flash(error.message, "error");
      } else {
        Messages.flash(`Test email sent (“${result}”).`, "success");
      }
    });
  }

  render() {
    
    const {email, name} = this.props;

    return (
      <tr>
        <td>{name}</td>
        <td><a href={"/email/template/"+email.template} target="_blank">{email.template}</a></td>
        <td>{email.subject({})}</td>
        <td><a href={email.path.replace(":_id?", "")} target="_blank">{email.path}</a></td>
        <td>
          <div className={this.state.loading ? "test-email loading" : "test-email"}>
            <Button disabled={this.state.loading} onClick={this.sendTest} variant="primary" size="sm">Send Test</Button>
            {this.state.loading ? <Loading color="white"/> : null}
          </div>
        </td>
      </tr>
    )
  }
}

Email.propTypes = {
  email: PropTypes.object,
  name: PropTypes.string
}

const Emails = props => {

  const emails = GrudrEmail.emails;

  return (
    <div className="emails">
      <Jumbotron className="section-hero section-xsmall">
        <Container>
          <Row>
            <Col sm={12} md={7} lg={7}>
              <h3 className="display-3">Emails</h3>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <div className="section">
        <Container>
          <Row>
            <Col sm={12}>
              <table className="table">
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Template</td>
                    <td>Subject</td>
                    <td>HTML Preview</td>
                    <td>Send Test</td>
                  </tr>
                </thead>
                <tbody>
                  {_.map(emails, (email, key) => <Email key={key} email={email} name={key}/>)}
                </tbody>
              </table>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

module.exports = Emails
export default Emails
